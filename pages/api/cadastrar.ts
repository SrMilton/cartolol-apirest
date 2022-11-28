import type { NextApiRequest, NextApiResponse } from 'next'
import {executeQuery} from '../../config/db'

export default async function handler(req: NextApiRequest,res: NextApiResponse)
{

    var username = req.body.username
    var email = req.body.email
    var senha = req.body.senha

    if(username == undefined || username <= 0 || email == undefined || email <= 0 || senha == undefined || senha <= 0)
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
        if(checkuser[0].id != undefined)
        {
            return res.status(200).json(
                { status: 'false',
                msng: 'Usuario já cadastrado na plataforma'}
                )
        }
    }
    catch{}

    try
    {
    query = "INSERT INTO users (username, email, pass) VALUES ('" + username + "','" + email + "','" + senha + "');"
    var lista = await executeQuery(query, [])

    return res.status(200).json(
    { status: 'true',
    msng: 'Cadastrado com sucesso!'}
    )
    }
    catch
    {
        return res.status(500).json(
            { status: 'false',
            msng: 'Ocorreu um erro interno, tente novamente'}
            )
    }
}
