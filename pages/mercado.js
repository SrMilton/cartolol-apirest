export default function Home() {

    const abrir = async event => {
        document.getElementById('text').innerHTML = ""
        event.preventDefault()
        const res = await fetch('/api/update_mercado', {
          body: JSON.stringify({
            status: '0',
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
        const result = await res.json()
        document.getElementById('text').innerHTML = "Mercado Aberto!"
    }

    const fechar = async event => {
        document.getElementById('text').innerHTML = ""
        event.preventDefault()
        const res = await fetch('/api/update_mercado', {
          body: JSON.stringify({
            status: '1',
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
        const result = await res.json()
        document.getElementById('text').innerHTML = "Mercado Fechado!"
    }

    return (
        <div>
            <form onSubmit={abrir}>
            <button id = "btn" type="submit" value = '0'>Abrir Mercado</button>
            </form>
            <form onSubmit={fechar}>
            <button id = "btn" type="submit" value = '1'>Fechar Mercado</button>
            </form>
            <p id="text"></p>
        </div>
    )
}