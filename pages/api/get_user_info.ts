import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import {verify} from 'jsonwebtoken'
import {executeQuery} from '../../config/db'
import jwt_decode from "jwt-decode";
import dynamic from 'next/dynamic';

var players = [
  {
    id: 1,
    nome: "Zeus",
    pos: "top",
    time: "T1",
    media_farm: "289",
    img_url: "https://i.imgur.com/7PehcU8.png",
    partida_atual: {
      kda: "2/5/6",
      atual_farm: "288",
      pontos: "46"
    },
    partida_anterior: {
      kda: "6/3/6",
      anterior_farm: "290",
      pontos: "74"
    }
  },
  
  {
    id: 2,
    nome: "Oner",
    pos: "jg",
    time: "T1",
    media_farm: "179",
    img_url: "https://i.imgur.com/fdF2ykl.png",
    partida_atual: {
      kda: "2/5/9",
      atual_farm: "186",
      pontos: "53"
    },
    partida_anterior: {
      kda: "2/2/7",
      anterior_farm: "171",
      pontos: "83"
    }
  },
  
  {
    id: 3,
    nome: "Faker",
    pos: "mid",
    time: "T1",
    media_farm: "278",
    img_url: "https://i.imgur.com/7Ca1BsN.png",
    partida_atual: {
      kda: "6/1/4",
      atual_farm: "406",
      pontos: "120"
    },
    partida_anterior: {
      kda: "6/2/10",
      anterior_farm: "208",
      pontos: "98"
    }
  },
  
  {
    id: 4,
    nome: "Gumayusi",
    pos: "adc",
    time: "T1",
    media_farm: "383",
    img_url: "https://i.imgur.com/vWZ7fzR.png",
    partida_atual: {
      kda: "5/4/7",
      atual_farm: "410",
      pontos: "75"
    },
    partida_anterior: {
      kda: "7/3/4",
      anterior_farm: "356",
      pontos: "77"
    }
  },
  
  {
    id: 5,
    nome: "Keria",
    pos: "sup",
    time: "T1",
    media_farm: "22",
    img_url: "https://i.imgur.com/Sq1fn6n.png",
    partida_atual: {
      kda: "3/1/11",
      atual_farm: "24",
      pontos: "111"
    },
    partida_anterior: {
      kda: "2/1/9",
      anterior_farm: "20",
      pontos: "105"
    }
  },
  
  
  
  {
    id: 6,
    nome: "Fudge",
    pos: "top",
    time: "Cloud9",
    media_farm: "223",
    img_url: "https://i.imgur.com/C44CcIP.png",
    partida_atual: {
      kda: "2/0/11",
      atual_farm: "226",
      pontos: "121"
    },
    partida_anterior: {
      kda: "8/2/0",
      anterior_farm: "219",
      pontos: "70"
    }
  },
  
  {
    id: 7,
    nome: "Blaber",
    pos: "jg",
    time: "Cloud9",
    media_farm: "137",
    img_url: "https://i.imgur.com/4qQchet.png",
    partida_atual: {
      kda: "2/1/11",
      atual_farm: "153",
      pontos: "117"
    },
    partida_anterior: {
      kda: "0/4/1",
      anterior_farm: "121",
      pontos: "36"
    }
  },
  
  {
    id: 8,
    nome: "Diplex",
    pos: "mid",
    time: "Cloud9",
    media_farm: "224",
    img_url: "https://i.imgur.com/6BeFMy5.png",
    partida_atual: {
      kda: "8/2/7",
      atual_farm: "257",
      pontos: "94"
    },
    partida_anterior: {
      kda: "0/3/1",
      anterior_farm: "190",
      pontos: "49"
    }
  },
  
  {
    id: 9,
    nome: "Berseker",
    pos: "adc",
    time: "Cloud9",
    media_farm: "243",
    img_url: "https://i.imgur.com/bpp9Rsn.png",
    partida_atual: {
      kda: "5/1/8",
      atual_farm: "259",
      pontos: "123"
    },
    partida_anterior: {
      kda: "9/3/4",
      anterior_farm: "226",
      pontos: "73"
    }
  },
  
  {
    id: 10,
    nome: "Zven",
    pos: "sup",
    time: "Cloud9",
    media_farm: "18",
    img_url: "https://i.imgur.com/8c3ZgIM.png",
    partida_atual: {
      kda: "1/1/9",
      atual_farm: "14",
      pontos: "101"
    },
    partida_anterior: {
      kda: "1/7/0",
      anterior_farm: "22",
      pontos: "34"
    }
  },
  
  
  
  {
    id: 11,
    nome: "Wizer",
    pos: "top",
    time: "paiN Gaming",
    media_farm: "228",
    img_url: "https://i.imgur.com/2tHTvT4.png",
    partida_atual: {
      kda: "3/5/1",
      atual_farm: "220",
      pontos: "52"
    },
    partida_anterior: {
      kda: "1/3/4",
      anterior_farm: "236",
      pontos: "55"
    }
  },
  
  {
    id: 12,
    nome: "CarioK",
    pos: "jg",
    time: "paiN Gaming",
    media_farm: "148",
    img_url: "https://i.imgur.com/ODp6C1U.png",
    partida_atual: {
      kda: "3/4/5",
      atual_farm: "147",
      pontos: "54"
    },
    partida_anterior: {
      kda: "2/6/6",
      anterior_farm: "148",
      pontos: "44"
    }
  },
  
  {
    id: 13,
    nome: "dyNquedo",
    pos: "mid",
    time: "paiN Gaming",
    media_farm: "304",
    img_url: "https://i.imgur.com/JHUJ4xw.png",
    partida_atual: {
      kda: "4/3/5",
      atual_farm: "275",
      pontos: "65"
    },
    partida_anterior: {
      kda: "9/3/2",
      anterior_farm: "332",
      pontos: "74"
    }
  },
  
  {
    id: 14,
    nome: "Trigo",
    pos: "adc",
    time: "paiN Gaming",
    media_farm: "265",
    img_url: "https://i.imgur.com/PdNcT5V.png",
    partida_atual: {
      kda: "1/1/9",
      atual_farm: "197",
      pontos: "78"
    },
    partida_anterior: {
      kda: "5/3/3",
      anterior_farm: "332",
      pontos: "68"
    }
  },
  
  {
    id: 15,
    nome: "Damage",
    pos: "sup",
    time: "paiN Gaming",
    media_farm: "34",
    img_url: "https://i.imgur.com/deB7FPa.png",
    partida_atual: {
      kda: "1/5/8",
      atual_farm: "28",
      pontos: "64"
    },
    partida_anterior: {
      kda: "0/4/14",
      anterior_farm: "39",
      pontos: "56"
    }
  },
  
  
  
  {
    id: 16,
    nome: "Guigo",
    pos: "top",
    time: "RED Canids",
    media_farm: "232",
    img_url: "https://i.imgur.com/mEH01PC.png",
    partida_atual: {
      kda: "1/4/2",
      atual_farm: "229",
      pontos: "52"
    },
    partida_anterior: {
      kda: "4/5/10",
      anterior_farm: "235",
      pontos: "68"
    }
  },
  
  {
    id: 17,
    nome: "Aegis",
    pos: "RED Canids",
    time: "jg",
    media_farm: "197",
    img_url: "https://i.imgur.com/wPqTnSU.png",
    partida_atual: {
      kda: "0/1/2",
      atual_farm: "211",
      pontos: "50"
    },
    partida_anterior: {
      kda: "7/2/5",
      anterior_farm: "183",
      pontos: "92"
    }
  },
  
  {
    id: 18,
    nome: "Avenger",
    pos: "RED Canids",
    time: "mid",
    media_farm: "215",
    img_url: "https://i.imgur.com/8u2QPqW.png",
    partida_atual: {
      kda: "1/1/3",
      atual_farm: "209",
      pontos: "70"
    },
    partida_anterior: {
      kda: "5/1/10",
      anterior_farm: "219",
      pontos: "125"
    }
  },
  
  {
    id: 19,
    nome: "TitaN",
    pos: "RED Canids",
    time: "adc",
    media_farm: "261",
    img_url: "https://i.imgur.com/AQM2cXg.png",
    partida_atual: {
      kda: "8/3/1",
      atual_farm: "253",
      pontos: "63"
    },
    partida_anterior: {
      kda: "3/2/9",
      anterior_farm: "269",
      pontos: "85"
    }
  },
  
  {
    id: 20,
    nome: "Jojo",
    pos: "RED Canids",
    time: "sup",
    media_farm: "29",
    img_url: "https://i.imgur.com/MoWrF5p.png",
    partida_atual: {
      kda: "0/4/3",
      atual_farm: "38",
      pontos: "33"
    },
    partida_anterior: {
      kda: "0/0/8",
      anterior_farm: "20",
      pontos: "88"
    }
  },
  
  
  
  {
    id: 21,
    nome: "Parang",
    pos: "top",
    time: "KaBuM! e-Sports",
    media_farm: "217",
    img_url: "https://i.imgur.com/0gVDMzo.png",
    partida_atual: {
      kda: "2/4/15",
      atual_farm: "186",
      pontos: "68"
    },
    partida_anterior: {
      kda: "2/1/4",
      anterior_farm: "247",
      pontos: "86"
    }
  },
  
  {
    id: 22,
    nome: "Wiz",
    pos: "jg",
    time: "KaBuM! e-Sports",
    media_farm: "194",
    img_url: "https://i.imgur.com/Ja6R6CT.png",
    partida_atual: {
      kda: "13/1/12",
      atual_farm: "198",
      pontos: "124"
    },
    partida_anterior: {
      kda: "3/2/5",
      anterior_farm: "189",
      pontos: "70"
    }
  },
  
  {
    id: 23,
    nome: "Hauz",
    pos: "mid",
    time: "KaBuM! e-Sports",
    media_farm: "291",
    img_url: "https://i.imgur.com/GayKkKR.png",
    partida_atual: {
      kda: "8/4/13",
      atual_farm: "271",
      pontos: "78"
    },
    partida_anterior: {
      kda: "2/3/5",
      anterior_farm: "311",
      pontos: "61"
    }
  },
  
  {
    id: 24,
    nome: "DudsTheBoy",
    pos: "adc",
    time: "KaBuM! e-Sports",
    media_farm: "249",
    img_url: "https://i.imgur.com/ZV2YPfL.png",
    partida_atual: {
      kda: "5/3/17",
      atual_farm: "218",
      pontos: "90"
    },
    partida_anterior: {
      kda: "4/4/2",
      anterior_farm: "279",
      pontos: "57"
    }
  },
  
  {
    id: 25,
    nome: "Scuru",
    pos: "sup",
    time: "KaBuM! e-Sports",
    media_farm: "15",
    img_url: "https://i.imgur.com/7HH9VEC.png",
    partida_atual: {
      kda: "3/0/25",
      atual_farm: "7",
      pontos: "127"
    },
    partida_anterior: {
      kda: "1/3/12",
      anterior_farm: "23",
      pontos: "62"
    }
  }
]

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
    //Pegar infos do user
    var jwtdecode: any
    jwtdecode = jwt_decode(jwt);
    

    var query = "SELECT * FROM users WHERE username = '" + jwtdecode.username + "'"
    var checkuser = await executeQuery(query, [])

    var lane1
    var lane2
    var lane3
    var lane4
    var lane5
    try
    {
      if(checkuser[0].id_jogtop != 0)
      {
        lane1 = players[checkuser[0].id_jogtop - 1]
      }else
      {
        lane1 = {id:0}
      }
    }
    catch
    {
      lane1 = {id:0}
    }
    try
    {
      if(checkuser[0].id_jogjungle != 0)
      {
        lane2 = players[checkuser[0].id_jogjungle - 1]
      }
      else
      {
        lane2 = {id:0}
      }
    }
    catch
    {
      lane2 = {id:0}
    }
    try
    {
      if(checkuser[0].id_jogmid != 0)
      {
        lane3 = players[checkuser[0].id_jogmid - 1]
      }
      else
      {
        lane3 = {id:0}
      }
    }
    catch
    {
      lane3 = {id:0}
    }
    try
    {
      if(checkuser[0].id_jogbot != 0)
      {
        lane4 = players[checkuser[0].id_jogbot - 1]
      }
      else
      {
        lane4 = {id:0}
      }
    }
    catch
    {
      lane4 = {id:0}
    }
    try
    {
      if(checkuser[0].id_jogsup != 0)
      {
        lane5 = players[checkuser[0].id_jogsup - 1]
      }
      else
      {
        lane5 = {id:0}
      }
    }
    catch
    {
      lane5 = {id:0}
    }

    return res.status(200).json(
        { status: 'true',
          id: checkuser[0].id,
          username: checkuser[0].username,
          email: checkuser[0].email,
          profile_pic: checkuser[0].profile_pic,
          ptos: checkuser[0].ptos,
          last_ptos: checkuser[0].last_ptos,
          flag: checkuser[0].flag,
          id_jogtop: lane1,
          id_jogjungle: lane2,
          id_jogmid: lane3,
          id_jogbot: lane4,
          id_jogsup: lane5}
        )
  }
  else
  {
    return res.status(200).json(
        { status: 'false',
          msng: "JWT invalido ou expirado"}
        )
  }

}