export default function Home() {

  const abrir = async event => {
    document.getElementById('text').innerHTML = "Processando.."
    event.preventDefault()
    const res = await fetch('/api/next_round', {
      body: JSON.stringify({
        status: '0',
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
      document.getElementById('text').innerHTML = "Ocorreu um erro, tenta dnv que vai!"
    }
  }

  const fechar = async event => {
    document.getElementById('text').innerHTML = "Processando.."
    event.preventDefault()
    const res = await fetch('/api/zerar_pontos', {
      body: JSON.stringify({
        status: '1',
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    const result = await res.json()
    document.getElementById('text').innerHTML = "Dados Zerados!"
  }

  return (
    <div>
      <form onSubmit={abrir}>
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