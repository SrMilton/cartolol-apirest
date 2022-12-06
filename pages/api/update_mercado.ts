import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import {executeQuery} from '../../config/db'

export default async function handler(req: NextApiRequest,res: NextApiResponse)
{
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

 if(req.body.pass != process.env.DEV_SENHA)
    {
        return res.status(200).json(
            {
                status: 'false'
            }
        )
    }

 var status = req.body.status

 var query = "UPDATE mercado SET is_aberto = '" + status + "';"
 var checkuser = await executeQuery(query, [])

 return res.status(200).json(
    { status: 'true'}
    )

}