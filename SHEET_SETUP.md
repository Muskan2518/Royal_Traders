# Auto-update Google Sheet for Pickup Requests

Follow these 5 steps to make every form submission on the website land as a new row in a Google Sheet that the owner can open / download anytime.

---

## 1. Create the sheet

1. Go to <https://sheets.new>
2. Rename it to **"Royal Traders — Pickup Requests"** (or anything)
3. In **row 1**, paste these column headers (copy as a single line, tab-separated, or type them out):

   ```
   Timestamp	Name	Phone	Location	Category	Message	Contact Preference
   ```

4. Bold row 1 (optional, just for readability)

---

## 2. Add the Apps Script

1. In the sheet, click **Extensions → Apps Script**
2. Delete whatever boilerplate code is there
3. Paste this code:

   ```javascript
   const SHEET_NAME = "Sheet1"; // change if you renamed the tab

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
   ```

4. Click the **Save** icon (💾) — name the project anything, e.g. "Pickup Requests Hook"

---

## 3. Deploy as a Web App

1. Top-right of the Apps Script editor, click **Deploy → New deployment**
2. Click the gear icon ⚙ next to "Select type" → choose **Web app**
3. Fill in:
   - **Description**: `pickup-request webhook`
   - **Execute as**: **Me (your-email@gmail.com)**
   - **Who has access**: **Anyone**  ← important
4. Click **Deploy**
5. Google will ask for permission — click **Authorize access**, choose your account, click **Advanced → Go to (project name) (unsafe) → Allow**
6. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/AKfy.../exec`)

---

## 4. Add the URL to Vercel

1. Go to your project on <https://vercel.com>
2. **Settings → Environment Variables**
3. Add a new variable:
   - **Name**: `PICKUP_SHEET_WEBHOOK`
   - **Value**: paste the Web app URL from step 3
   - Apply to: Production, Preview, Development (tick all)
4. Click **Save**
5. Go to **Deployments → ... → Redeploy** the latest deployment (so the env var is picked up)

(Optional — also set on Vercel for completeness:)

- `PICKUP_MAIL_TO` — owner's email
- `PICKUP_MAIL_USER` — sender Gmail
- `PICKUP_MAIL_PASS` — Gmail App Password (no spaces)

---

## 5. Test it

1. Open the deployed site
2. Submit the pickup form
3. Open the Google Sheet — you should see a **new row** appear instantly
4. Owner can now bookmark the sheet URL and open it anytime

To download as Excel: in the Google Sheet, **File → Download → Microsoft Excel (.xlsx)**.

---

## Troubleshooting

- **Nothing shows up in the sheet** → Vercel logs will show the error. Most common cause: the Apps Script Web App access is set to "Only myself" instead of "Anyone". Re-deploy from step 3 with **Who has access: Anyone**.
- **Email still works, but sheet doesn't** → That's by design. The form considers itself successful if the email goes through; the sheet write is best-effort and won't block submissions.
- **Updated the Apps Script code** → You **must** create a new deployment (or "Manage deployments → edit → New version"). Existing deployments keep running the old code.
