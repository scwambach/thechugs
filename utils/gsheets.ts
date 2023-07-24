const { google } = require('googleapis');
const { authorize } = require('google-auth-library');

// Replace with your own credentials file and sheet ID
const credentials = require('./path/to/your/credentials.json');
const sheetId = 'YOUR_GOOGLE_SHEET_ID';

// Scopes required to access Google Sheets API
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const getDataFromGoogleSheet = async () => {
  try {
    // Create a new Google Sheets API client with your credentials
    const authClient = await authorize(credentials, SCOPES);

    // Create the Google Sheets API instance
    const sheets = google.sheets({ version: 'v4', auth: authClient });

    // Define the range of data you want to retrieve (e.g., "Sheet1!A1:C100")
    const range = 'Sheet1!A1:C100';

    // Fetch the data from the Google Sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range,
    });

    // Process the data and return it
    const data = response.data.values;
    return data;
  } catch (err) {
    // Handle errors appropriately
    console.error('Error fetching data from Google Sheet:', err.message);
    return null;
  }
};

// Usage example:
(async () => {
  const sheetData = await getDataFromGoogleSheet();
  if (sheetData) {
    console.log('Data from Google Sheet:', sheetData);
    // Process or render the data as needed
  }
})();
