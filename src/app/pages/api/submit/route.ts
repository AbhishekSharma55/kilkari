import type { NextApiRequest, NextApiResponse } from 'next'
 
export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body
  res.status(200).json({ data })
}