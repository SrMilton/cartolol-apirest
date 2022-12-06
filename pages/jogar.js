export default function Home() {
  var senha = ""
  const abrir = async event => {
    document.getElementById('text').innerHTML = "Processando.."
    event.preventDefault()
    const res = await fetch('/api/next_round', {
      body: JSON.stringify({
        pass: document.getElementById('senha').value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    const result = await res.json()
    if (result.status == "true") {
      document.getElementById('text').innerHTML = "Partida Realizada!"
    }
    else {
      document.getElementById('text').innerHTML = "Senha Incorreta!"
    }
  }

  const fechar = async event => {
    event.preventDefault()
    document.getElementById('text').innerHTML = "Processando.."
    const res = await fetch('/api/zerar_pontos', {
      body: JSON.stringify({
        pass: document.getElementById('senha').value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    const result = await res.json()
    if (result.status == "true") {
      document.getElementById('text').innerHTML = "Dados Zerados!"
    }
    else {
      document.getElementById('text').innerHTML = "Senha Incorreta!"
    }
    
  }

  return (
    <div>
      <form onSubmit={abrir}>
        Senha: <input type="password" id="senha"></input> <br></br><br></br>
        <button id="btn" type="submit" value='0'>Proximo Round</button>
      </form>
      <br></br><br></br><br></br><br></br><br></br>
      <form onSubmit={fechar}>
        <button id="btn" type="submit" value='1'>Zerar Dados</button>
      </form>
      <p id="text"></p>
    </div>
  )
}