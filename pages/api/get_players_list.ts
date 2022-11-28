import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';

var players = [
  {
    id: 1,
    nome: "Zeus",
    pos: "top",
    time: "T1",
    media_farm: "289",
    img_url: "https://i.imgur.com/HaTacq6.png",
    partida_atual: {
      kda: "2/5/6",
      atual_farm: "288",
      pontos: ""
    },
    partida_anterior: {
      kda: "6/3/6",
      anterior_farm: "290",
      pontos: ""
    }
  },
  
  {
    id: 2,
    nome: "Oner",
    pos: "jg",
    time: "T1",
    media_farm: "179",
    img_url: "https://i.imgur.com/VgE65YU.png",
    partida_atual: {
      kda: "2/5/9",
      atual_farm: "186",
      pontos: ""
    },
    partida_anterior: {
      kda: "2/2/7",
      anterior_farm: "171",
      pontos: ""
    }
  },
  
  {
    id: 3,
    nome: "Faker",
    pos: "mid",
    time: "T1",
    media_farm: "278",
    img_url: "https://i.imgur.com/0ZCJ72w.png",
    partida_atual: {
      kda: "2/5/6",
      atual_farm: "263",
      pontos: ""
    },
    partida_anterior: {
      kda: "0/3/6",
      anterior_farm: "293",
      pontos: ""
    }
  },
  
  {
    id: 4,
    nome: "Gumayusi",
    pos: "adc",
    time: "T1",
    media_farm: "383",
    img_url: "https://i.imgur.com/8CdaoIV.png",
    partida_atual: {
      kda: "5/4/7",
      atual_farm: "410",
      pontos: ""
    },
    partida_anterior: {
      kda: "7/3/4",
      anterior_farm: "356",
      pontos: ""
    }
  },
  
  {
    id: 5,
    nome: "Keria",
    pos: "sup",
    time: "T1",
    media_farm: "22",
    img_url: "https://i.imgur.com/BPYCZ73.png",
    partida_atual: {
      kda: "3/1/11",
      atual_farm: "24",
      pontos: ""
    },
    partida_anterior: {
      kda: "2/1/9",
      anterior_farm: "20",
      pontos: ""
    }
  },
  
  
  
  {
    id: 6,
    nome: "Fudge",
    pos: "top",
    time: "Cloud9",
    media_farm: "223",
    img_url: "https://i.imgur.com/9QNe4IC.png",
    partida_atual: {
      kda: "2/0/11",
      atual_farm: "226",
      pontos: ""
    },
    partida_anterior: {
      kda: "0/2/0",
      anterior_farm: "219",
      pontos: ""
    }
  },
  
  {
    id: 7,
    nome: "Blaber",
    pos: "jg",
    time: "Cloud9",
    media_farm: "137",
    img_url: "https://i.imgur.com/6yiqCln.png",
    partida_atual: {
      kda: "2/1/11",
      atual_farm: "153",
      pontos: ""
    },
    partida_anterior: {
      kda: "0/4/1",
      anterior_farm: "121",
      pontos: ""
    }
  },
  
  {
    id: 8,
    nome: "Diplex",
    pos: "mid",
    time: "Cloud9",
    media_farm: "224",
    img_url: "https://i.imgur.com/I5VUbz9.png",
    partida_atual: {
      kda: "8/2/7",
      atual_farm: "257",
      pontos: ""
    },
    partida_anterior: {
      kda: "0/3/1",
      anterior_farm: "190",
      pontos: ""
    }
  },
  
  {
    id: 9,
    nome: "Berseker",
    pos: "adc",
    time: "Cloud9",
    media_farm: "243",
    img_url: "https://i.imgur.com/dMyTdOb.png",
    partida_atual: {
      kda: "5/1/8",
      atual_farm: "259",
      pontos: ""
    },
    partida_anterior: {
      kda: "0/3/1",
      anterior_farm: "226",
      pontos: ""
    }
  },
  
  {
    id: 10,
    nome: "Zven",
    pos: "sup",
    time: "Cloud9",
    media_farm: "18",
    img_url: "https://i.imgur.com/BBdl560.png",
    partida_atual: {
      kda: "1/1/10",
      atual_farm: "14",
      pontos: ""
    },
    partida_anterior: {
      kda: "1/7/0",
      anterior_farm: "22",
      pontos: ""
    }
  },
  
  
  
  {
    id: 11,
    nome: "Wizer",
    pos: "top",
    time: "paiN Gaming",
    media_farm: "228",
    img_url: "https://i.imgur.com/ueTVrw6.png",
    partida_atual: {
      kda: "3/5/1",
      atual_farm: "220",
      pontos: ""
    },
    partida_anterior: {
      kda: "1/3/4",
      anterior_farm: "236",
      pontos: ""
    }
  },
  
  {
    id: 12,
    nome: "CarioK",
    pos: "jg",
    time: "paiN Gaming",
    media_farm: "148",
    img_url: "https://i.imgur.com/50KcCBf.png",
    partida_atual: {
      kda: "3/4/5",
      atual_farm: "147",
      pontos: ""
    },
    partida_anterior: {
      kda: "2/6/6",
      anterior_farm: "148",
      pontos: ""
    }
  },
  
  {
    id: 13,
    nome: "dyNquedo",
    pos: "mid",
    time: "paiN Gaming",
    media_farm: "304",
    img_url: "https://i.imgur.com/Tw13WPF.png",
    partida_atual: {
      kda: "4/3/5",
      atual_farm: "275",
      pontos: ""
    },
    partida_anterior: {
      kda: "3/3/2",
      anterior_farm: "332",
      pontos: ""
    }
  },
  
  {
    id: 14,
    nome: "Trigo",
    pos: "adc",
    time: "paiN Gaming",
    media_farm: "265",
    img_url: "https://i.imgur.com/NUUBjJa.png",
    partida_atual: {
      kda: "1/1/9",
      atual_farm: "197",
      pontos: ""
    },
    partida_anterior: {
      kda: "5/3/3",
      anterior_farm: "332",
      pontos: ""
    }
  },
  
  {
    id: 15,
    nome: "Damage",
    pos: "sup",
    time: "paiN Gaming",
    media_farm: "34",
    img_url: "https://i.imgur.com/5OJstZw.png",
    partida_atual: {
      kda: "1/5/8",
      atual_farm: "28",
      pontos: ""
    },
    partida_anterior: {
      kda: "0/4/7",
      anterior_farm: "39",
      pontos: ""
    }
  },
  
  
  
  {
    id: 16,
    nome: "Guigo",
    pos: "RED Canids",
    time: "top",
    media_farm: "232",
    img_url: "https://i.imgur.com/QKq7nu3.png",
    partida_atual: {
      kda: "1/4/2",
      atual_farm: "229",
      pontos: ""
    },
    partida_anterior: {
      kda: "4/5/4",
      anterior_farm: "235",
      pontos: ""
    }
  },
  
  {
    id: 17,
    nome: "Aegis",
    pos: "RED Canids",
    time: "jg",
    media_farm: "197",
    img_url: "https://i.imgur.com/KEMrpbB.png",
    partida_atual: {
      kda: "0/1/2",
      atual_farm: "211",
      pontos: ""
    },
    partida_anterior: {
      kda: "7/0/5",
      anterior_farm: "183",
      pontos: ""
    }
  },
  
  {
    id: 18,
    nome: "Avenger",
    pos: "RED Canids",
    time: "mid",
    media_farm: "215",
    img_url: "https://i.imgur.com/Vye5gp1.png",
    partida_atual: {
      kda: "1/5/3",
      atual_farm: "209",
      pontos: ""
    },
    partida_anterior: {
      kda: "5/1/10",
      anterior_farm: "219",
      pontos: ""
    }
  },
  
  {
    id: 19,
    nome: "TitaN",
    pos: "RED Canids",
    time: "adc",
    media_farm: "261",
    img_url: "https://i.imgur.com/LTQjysZ.png",
    partida_atual: {
      kda: "2/3/0",
      atual_farm: "253",
      pontos: ""
    },
    partida_anterior: {
      kda: "3/2/9",
      anterior_farm: "269",
      pontos: ""
    }
  },
  
  {
    id: 20,
    nome: "Jojo",
    pos: "RED Canids",
    time: "sup",
    media_farm: "29",
    img_url: "https://i.imgur.com/1fS5ifq.png",
    partida_atual: {
      kda: "0/4/3",
      atual_farm: "38",
      pontos: ""
    },
    partida_anterior: {
      kda: "0/0/12",
      anterior_farm: "20",
      pontos: ""
    }
  },
  
  
  
  {
    id: 21,
    nome: "Parang",
    pos: "top",
    time: "KaBuM! e-Sports",
    media_farm: "217",
    img_url: "https://i.imgur.com/r32DvIE.png",
    partida_atual: {
      kda: "5/4/12",
      atual_farm: "186",
      pontos: ""
    },
    partida_anterior: {
      kda: "2/2/4",
      anterior_farm: "247",
      pontos: ""
    }
  },
  
  {
    id: 22,
    nome: "Wiz",
    pos: "jg",
    time: "KaBuM! e-Sports",
    media_farm: "194",
    img_url: "https://i.imgur.com/gHmgJtE.png",
    partida_atual: {
      kda: "13/1/12",
      atual_farm: "198",
      pontos: ""
    },
    partida_anterior: {
      kda: "3/3/5",
      anterior_farm: "189",
      pontos: ""
    }
  },
  
  {
    id: 23,
    nome: "Hauz",
    pos: "mid",
    time: "KaBuM! e-Sports",
    media_farm: "291",
    img_url: "https://i.imgur.com/zzYh63Q.png",
    partida_atual: {
      kda: "8/4/13",
      atual_farm: "271",
      pontos: ""
    },
    partida_anterior: {
      kda: "2/3/5",
      anterior_farm: "311",
      pontos: ""
    }
  },
  
  {
    id: 24,
    nome: "DudsTheBoy",
    pos: "adc",
    time: "KaBuM! e-Sports",
    media_farm: "249",
    img_url: "https://i.imgur.com/JQAAUp9.png",
    partida_atual: {
      kda: "5/3/17",
      atual_farm: "218",
      pontos: ""
    },
    partida_anterior: {
      kda: "4/4/2",
      anterior_farm: "279",
      pontos: ""
    }
  },
  
  {
    id: 25,
    nome: "Scuru",
    pos: "sup",
    time: "KaBuM! e-Sports",
    media_farm: "15",
    img_url: "https://i.imgur.com/Z8JKsOm.png",
    partida_atual: {
      kda: "3/0/25",
      atual_farm: "7",
      pontos: ""
    },
    partida_anterior: {
      kda: "1/3/5",
      anterior_farm: "23",
      pontos: ""
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
  /*
  top 1
  jg  2
  mid 3
  adc 4
  sup 5
  */
  var lane = req.body.lane
  if(lane <= 0 || lane > 5 || lane == undefined)
  {
    return res.status(400).json(
      { status: 'false',
      msng: 'Parametros invalidos ou faltando'}
      )
  }
  var jogadores = []

  if(lane == 1)
  {
    for (var i = 0; i < players.length; i++)
      {
        if(players[i].pos == "top")
        {
          jogadores.push(players[i])
        }
      }
  }
  if(lane == 2)
  {
    for (var i = 0; i < players.length; i++)
      {
        if(players[i].pos == "jg")
        {
          jogadores.push(players[i])
        }
      }
  }
  if(lane == 3)
  {
    for (var i = 0; i < players.length; i++)
      {
        if(players[i].pos == "mid")
        {
          jogadores.push(players[i])
        }
      }
  }
  if(lane == 4)
  {
    for (var i = 0; i < players.length; i++)
      {
        if(players[i].pos == "adc")
        {
          jogadores.push(players[i])
        }
      }
  }
  if(lane == 5)
  {
    for (var i = 0; i < players.length; i++)
      {
        if(players[i].pos == "sup")
        {
          jogadores.push(players[i])
        }
      }
  }
  
  return res.status(200).json(
    { status: 'true',
      players: jogadores }
    )
}
