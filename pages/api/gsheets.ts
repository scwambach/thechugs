import { NextApiRequest, NextApiResponse } from 'next';
import { google, sheets_v4 } from 'googleapis';
import { JWT } from 'google-auth-library';

const sheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;

// Scopes required to access Google Sheets API
const SCOPES: string[] = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const getDataFromGoogleSheet = async (): Promise<sheets_v4.Schema$ValueRange['values']> => {
  try {
    // Create a new JWT client with your credentials
    const authClient = new JWT({
      email: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_PRIVATE_KEY?.split(String.raw`\n`).join('\n'),
      scopes: SCOPES,
    });

    // Create the Google Sheets API instance
    //@ts-ignore
    const sheets = google.sheets({ version: 'v4', auth: authClient });

    // Define the range of data you want to retrieve (e.g., "Sheet1!A1:C100")
    const range = 'Sheet1!1:1000';

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

// API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const sheetData = await getDataFromGoogleSheet();
    if (sheetData) {
      // Send the data as the response
      res.status(200).json(sheetData);
    } else {
      res.status(500).json({ error: 'Failed to fetch data from Google Sheet' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
