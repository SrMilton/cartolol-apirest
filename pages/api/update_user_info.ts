import type { NextApiRequest, NextApiResponse } from 'next'
import {executeQuery} from '../../config/db'
import NextCors from 'nextjs-cors'
import {sign} from 'jsonwebtoken'
import jwt_decode from 'jwt-decode';
import {verify} from 'jsonwebtoken'
import { FlowFlags } from 'typescript';
import bcrypt from 'bcryptjs'

export default async function handler(req: NextApiRequest,res: NextApiResponse)
{
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

 var jwt = req.body.jwt
 var email = req.body.email
 var senha = req.body.newpass


  if(jwt <= 0 || jwt == undefined || email <= 0 || email == undefined || senha <= 0 || senha == undefined)
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


  try
  {
  var jwtdecode: any
  jwtdecode = jwt_decode(jwt);

  bcrypt.hash(senha, 10).then(async (hash) => {
    //query = "INSERT INTO users (username, email, pass) VALUES ('" + username + "','" + email + "','" + hash + "');"
    var query = "UPDATE users SET email = '" + email + "', pass = '" + hash + "' WHERE username = '" + jwtdecode.username + "';"
    var lista = await executeQuery(query, [])
    })

  return res.status(200).json(
    { status: 'true' }
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