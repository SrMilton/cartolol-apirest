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

 var query = "SELECT id, username, email, ptos_totais, profile_pic FROM users WHERE ptos > 0 ORDER BY ptos DESC;"
 var checkuser = await executeQuery(query, [])

 return res.status(200).json(
    { status: 'true',
    ranking: checkuser}
    )

}