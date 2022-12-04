import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import { kill } from 'process';
import { executeQuery } from '../../config/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    //Passar tudo atual pro velho
    var query = "UPDATE players SET anterior_kda = '0/0/0', anterior_farm = '0', anterior_ptos = '0', atual_kda = '0/0/0', atual_farm = '0', atual_ptos = '0';"
    var checkuser = await executeQuery(query, [])

    query = "UPDATE users SET ptos = '0', last_ptos = '0', id_jogtop = '0', id_jogjungle = '0', id_jogmid = '0', id_jogbot = '0', id_jogsup = '0', flag = '0', ptos_totais = '0';"
    checkuser = await executeQuery(query, [])

    return res.status(200).json(
        {
            status: 'true'
        }
    )

}