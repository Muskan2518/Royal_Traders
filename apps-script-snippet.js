// COPY EVERYTHING IN THIS FILE.
// Then in your Google Sheet: Extensions → Apps Script → paste this → Save → Deploy → Manage deployments → edit → New version → Deploy.
// The /exec URL stays the same; both POST (form submissions) and GET (admin dashboard) use it.

const SHEET_NAME = "Sheet1"; // change if your tab has a different name

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
      || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.phone || "",
      data.location || "",
      data.category || "",
      data.message || "",
      data.contactPref || ""
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
      || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    const values = sheet.getDataRange().getValues();
    // assume row 1 is header; if your sheet has no header row, change slice(1) to slice(0)
    const rows = values.slice(1)
      .filter(r => r[0] || r[1] || r[2])
      .map(r => ({
        timestamp: r[0] instanceof Date ? r[0].toISOString() : String(r[0] || ""),
        name: String(r[1] || ""),
        phone: String(r[2] || ""),
        location: String(r[3] || ""),
        category: String(r[4] || ""),
        message: String(r[5] || ""),
        contactPref: String(r[6] || "")
      }));
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, rows }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
