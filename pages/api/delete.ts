// drafts.68225218-9d17-4a0d-a470-0e87d539b4f4
import { NextApiRequest, NextApiResponse } from 'next'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const mutations = [
    {
      delete: {
        id: 'drafts.68225218-9d17-4a0d-a470-0e87d539b4f4',
      },
    },
  ]

  const request = await fetch(
    `https://${process.env.SANITY_ID}.api.sanity.io/v1/data/mutate/production`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    }
  )

  const response = await request.json()
  //check for errors
  if (response.errors) {
    console.error(response.errors)
    return res.status(500).json({ message: 'Something went wrong' })
  }
  //return the updated document
  return res.status(200).json(response)
}
