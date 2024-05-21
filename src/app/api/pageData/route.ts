import { client } from '@utils/client'
import { PAGE_QUERY } from '@utils/queries/PAGE_QUERY'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
  const slug = req.url.split('?slug=')[1]

  const data = await client.fetch(PAGE_QUERY, {
    slug,
  })

  return NextResponse.json({
    status: 200,
    ...data,
  })
}
