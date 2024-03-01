import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';

var cks = ""
export default async function handler(req: NextApiRequest,res: NextApiResponse)
{
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

    if(req.body.cookies != undefined)
    {
        cks = req.body.cookies
    }
    
    if(cks != "")
    {
  return res.status(200).json(
    { status: 'true',
      cookies: cks }
    )
  }
  return res.status(200).json(
    { status: 'false' }
    )
}
