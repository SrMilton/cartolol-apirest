export default function Home() {

    const abrir = async event => {
        document.getElementById('text').innerHTML = ""
        event.preventDefault()
        const res = await fetch('/api/update_mercado', {
          body: JSON.stringify({
            status: '0',
            pass: document.getElementById('senha').value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
        const result = await res.json()
        if (result.status == "true") {
          document.getElementById('text').innerHTML = "Mercado Aberto!"
        }
        else {
          document.getElementById('text').innerHTML = "Senha Incorreta!"
        }
        
    }

    const fechar = async event => {
        document.getElementById('text').innerHTML = ""
        event.preventDefault()
        const res = await fetch('/api/update_mercado', {
          body: JSON.stringify({
            status: '1',
            pass: document.getElementById('senha').value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
        const result = await res.json()
        if (result.status == "true") {
          document.getElementById('text').innerHTML = "Mercado Fechado!"
        }
        else {
          document.getElementById('text').innerHTML = "Senha Incorreta!"
        }
        
    }

    return (
        <div>
            Senha: <input type="password" id="senha"></input> <br></br><br></br>
            <form onSubmit={abrir}>
            <button id = "btn" type="submit" value = '0'>Abrir Mercado</button>
            </form>
            <br></br><br></br>
            <form onSubmit={fechar}>
            <button id = "btn" type="submit" value = '1'>Fechar Mercado</button>
            </form>
            <p id="text"></p>
        </div>
    )
}