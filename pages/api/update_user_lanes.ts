import type { NextApiRequest, NextApiResponse } from 'next'
import {executeQuery} from '../../config/db'
import NextCors from 'nextjs-cors'
import {sign} from 'jsonwebtoken'
import jwt_decode from 'jwt-decode';
import {verify} from 'jsonwebtoken'
import { FlowFlags } from 'typescript';

export default async function handler(req: NextApiRequest,res: NextApiResponse)
{
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

 var jwt = req.body.jwt
 var ptos = req.body.ptos
 var flag = req.body.flag
 var lane1 = req.body.id_jogtop
 var lane2 = req.body.id_jogjungle
 var lane3 = req.body.id_jogmid
 var lane4 = req.body.id_jogbot
 var lane5 = req.body.id_jogsup

  if(jwt <= 0 || jwt == undefined || lane1 <= 0 || lane1 == undefined || lane2 <= 0 || lane2 == undefined || lane3 <= 0 || lane3 == undefined || lane4 <= 0 || lane4 == undefined || lane5 <= 0 || lane5 == undefined || ptos <= 0 || ptos == undefined || flag <= 0 || flag == undefined)
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
    var query = "SELECT * from mercado;"
    var checkuser = await executeQuery(query, [])
    if(checkuser[0].is_aberto == "1")
    {
      return res.status(200).json(
        { status: 'false',
        msng:"Mercado Fechado" }
        )
    }
  }
  catch
  {
    return res.status(500).json(
      { status: 'false',
      msng: 'Ocorreu um erro interno, tente novamente'}
      )
  }

  try
  {
  var jwtdecode: any
  jwtdecode = jwt_decode(jwt);
  var query = "UPDATE users SET ptos = '" + ptos + "', id_jogtop = '" + lane1 + "', id_jogjungle='" + lane2 + "', id_jogmid='" + lane3 + "', id_jogbot='" + lane4 + "', id_jogsup='" + lane5 + "', flag='"+ flag + "' WHERE username = '" + jwtdecode.username + "';"
  var lista = await executeQuery(query, [])
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