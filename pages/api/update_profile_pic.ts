import type { NextApiRequest, NextApiResponse } from 'next'
import { executeQuery } from '../../config/db'
import NextCors from 'nextjs-cors'
import { sign } from 'jsonwebtoken'
import jwt_decode from 'jwt-decode';
import { verify } from 'jsonwebtoken'
import { FlowFlags } from 'typescript';
import bcrypt from 'bcryptjs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    var jwt = req.body.jwt
    var pic_id = req.body.pic_id


    if (jwt <= 0 || jwt == undefined || pic_id <= 0 || pic_id == undefined) {
        return res.status(400).json(
            {
                status: 'false',
                msng: 'Parametros invalidos ou faltando'
            }
        )
    }

    try {
        var validToken = verify(jwt, process.env.JWT_KEY as string);
    }
    catch
    {
        return res.status(400).json(
            {
                status: 'false',
                msng: "JWT fornecido não é um JWT valido."
            }
        )
    }


    try {
        var jwtdecode: any
        jwtdecode = jwt_decode(jwt);

        var query = "UPDATE users SET profile_pic = '" + pic_id + "' WHERE username = '" + jwtdecode.username + "';"
        var lista = await executeQuery(query, [])

        return res.status(200).json(
            { status: 'true' }
        )
    }
    catch
    {
        return res.status(500).json(
            {
                status: 'false',
                msng: 'Ocorreu um erro interno, tente novamente'
            }
        )
    }

}