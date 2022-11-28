import type { NextApiRequest, NextApiResponse } from 'next'
import {executeQuery} from '../../config/db'
import NextCors from 'nextjs-cors'
import {sign} from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export default async function handler(req: NextApiRequest,res: NextApiResponse)
{
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
     
    var username = req.body.username
    var senha = req.body.senha

    if(username == undefined || username <= 0 || senha == undefined || senha <= 0)
    {
        return res.status(400).json(
            { status: 'false',
            msng: 'Parametros invalidos ou faltando'}
            )
    }

    var query = "SELECT * FROM users WHERE username = '" + username + "'"
    var checkuser = await executeQuery(query, [])

    try
    {

        bcrypt.compare(senha, checkuser[0].pass).then((match) => {
            if(!match)
            {
                return res.status(200).json(
                    { status: 'false',
                    msng: 'Usuario/Senha incorreta'}
                    )
            }
            else //Logado!
            {
                const accessToken = sign( //Criar JsonWebToken
                { id: checkuser[0].id,
                username: checkuser[0].username,
                email: checkuser[0].email},
                process.env.JWT_KEY
              );

                return res.status(200).json(
                    { status: 'true',
                    jwt: accessToken}
                    )
            }
        })

    }
    catch{ //Usuario nao cadastrado
        return res.status(200).json(
            { status: 'false',
            msng: 'Usuario/Senha incorreta'}
            )
    }


}