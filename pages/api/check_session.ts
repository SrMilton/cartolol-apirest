import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import {verify} from 'jsonwebtoken'
export default async function handler(req: NextApiRequest,res: NextApiResponse)
{
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

 var jwt = req.body.jwt

  if(jwt <= 0 || jwt == undefined)
  {
    return res.status(400).json(
      { status: 'false',
      msng: 'Parametros invalidos ou faltando'}
      )
  }

  try
  {
  var validToken = verify(jwt, process.env.JWT_KEY as string);
  }
  catch
  {
    return res.status(400).json(
        { status: 'false',
          msng:"JWT fornecido não é um JWT valido."}
        )
  }

  if(validToken)
  {
    return res.status(200).json(
        { status: 'true'}
        )
  }
  else
  {
    return res.status(200).json(
        { status: 'false'}
        )
  }
}