import mysql from "mysql2/promise";
import crypto from "node:crypto";

export type StoredPickup = {
  id: string;
  timestamp: string;
  name: string;
  phone: string;
  location: string;
  category: string;
  message: string;
  contactPref: string;
};

let pool: mysql.Pool | null = null;
let schemaReady = false;

function getPool(): mysql.Pool {
  if (pool) return pool;

  const url = process.env.DATABASE_URL;
  if (url) {
    pool = mysql.createPool(url);
  } else {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || "localhost",
      port: Number(process.env.MYSQL_PORT || 3306),
      user: process.env.MYSQL_USER || "root",
      password: process.env.MYSQL_PASSWORD || "",
      database: process.env.MYSQL_DATABASE || "royal_traders",
      waitForConnections: true,
      connectionLimit: 5
    });
  }
  return pool;
}

async function ensureSchema(): Promise<void> {
  if (schemaReady) return;
  const conn = getPool();
  await conn.query(`
    CREATE TABLE IF NOT EXISTS pickup_requests (
      id            CHAR(36)     NOT NULL PRIMARY KEY,
      timestamp     DATETIME     NOT NULL,
      name          VARCHAR(255) NOT NULL,
      phone         VARCHAR(32)  NOT NULL,
      location      VARCHAR(512) NOT NULL,
      category      VARCHAR(128) NOT NULL,
      message       TEXT         NOT NULL,
      contact_pref  VARCHAR(64)  NOT NULL DEFAULT '',
      INDEX idx_timestamp (timestamp),
      INDEX idx_category (category)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  schemaReady = true;
}

function rowToPickup(r: mysql.RowDataPacket): StoredPickup {
  const ts = r.timestamp instanceof Date ? r.timestamp.toISOString() : String(r.timestamp);
  return {
    id: String(r.id),
    timestamp: ts,
    name: String(r.name),
    phone: String(r.phone),
    location: String(r.location),
    category: String(r.category),
    message: String(r.message),
    contactPref: String(r.contact_pref ?? "")
  };
}

export async function readAll(): Promise<StoredPickup[]> {
  await ensureSchema();
  const [rows] = await getPool().query<mysql.RowDataPacket[]>(
    "SELECT id, timestamp, name, phone, location, category, message, contact_pref FROM pickup_requests ORDER BY timestamp DESC"
  );
  return rows.map(rowToPickup);
}

export async function append(row: Omit<StoredPickup, "id">): Promise<StoredPickup> {
  await ensureSchema();
  const id = crypto.randomUUID();
  const ts = new Date(row.timestamp);
  await getPool().query(
    "INSERT INTO pickup_requests (id, timestamp, name, phone, location, category, message, contact_pref) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [id, ts, row.name, row.phone, row.location, row.category, row.message, row.contactPref]
  );
  return { id, ...row };
}
