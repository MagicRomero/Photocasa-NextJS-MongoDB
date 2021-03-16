import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (session) {
    return res.send({
      content: 'secret-page',
    })
  }

  return res.send({
    error: 'Not authorized, go sign in motherfucker',
  })
}
