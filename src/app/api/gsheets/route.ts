import { NextApiRequest, NextApiResponse } from 'next'
import { google, sheets_v4 } from 'googleapis'
import { JWT } from 'google-auth-library'
import { NextRequest, NextResponse } from 'next/server'

const sheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID

// Scopes required to access Google Sheets API
const SCOPES: string[] = [
  'https://www.googleapis.com/auth/spreadsheets.readonly',
]

const getDataFromGoogleSheet = async (): Promise<
  sheets_v4.Schema$ValueRange['values']
> => {
  try {
    // Create a new JWT client with your credentials
    const authClient = new JWT({
      email: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_PRIVATE_KEY?.split(
        String.raw`\n`
      ).join('\n'),
      scopes: SCOPES,
    })

    // Create the Google Sheets API instance
    //@ts-ignore
    const sheets = google.sheets({ version: 'v4', auth: authClient })

    // Define the range of data you want to retrieve (e.g., "Sheet1!A1:C100")
    const range = 'Sheet1!1:1000'

    // Fetch the data from the Google Sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range,
    })

    // Process the data and return it
    const data = response.data.values
    return data
  } catch (err: any) {
    // Handle errors appropriately
    console.error('Error fetching data from Google Sheet:', err.message)
    return null
  }
}

// API route handler
export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    const sheetData = await getDataFromGoogleSheet()
    if (sheetData) {
      // Send the data as the response
      return NextResponse.json(sheetData, {
        status: 200,
      })
    } else {
      return new Response('Failed to fetch data from Google Sheet', {
        status: 500,
      })
    }
  } else {
    return new Response('Method not allowed', {
      status: 405,
    })
  }
}
