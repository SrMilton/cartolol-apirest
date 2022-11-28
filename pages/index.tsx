import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Documentação API Cartolol
        </h1>
        
        <div className={styles.cabecalho} >
        <h3>
          Atenção: Todos os requests devem ser enviados para a URL https://cartolol-apirest.vercel.app/api. <br></br>
          Atenção: Os bodys de todos os requests devem estar no formato JSON!
          </h3>
          </div>
        
          <div className={styles.description}>
        <h2>
          Pingar server
        </h2>
        
          
        URL: <code className={styles.code}>https://cartolol-apirest.vercel.app/api/ping</code>
          <br></br>

        <h4 >
          Possiveis retornos:
        </h4>
        <h5 >
          Status Code 200:
        </h5>
        1 - status: true
        </div>

        <div className={styles.description}>
        <h2 >
          Cadastrar conta
        </h2>
        
          
        URL: <code className={styles.code}>https://cartolol-apirest.vercel.app/api/cadastrar</code>
          <br></br>
        
          <h5 >
          Parâmetros exigidos:
        </h5>
        username:<code className={styles.code}>string</code> <br></br>
        email:<code className={styles.code}>string</code> <br></br>
        senha:<code className={styles.code}>string</code> 

        <h4 >
          Possiveis retornos:
        </h4>
        <h5 >
          Status Code 200:
        </h5>
        1 - status: false | msng: Usuario já cadastrado na plataforma <br></br>

        <h5 >
          Status Code 201:
        </h5>
        1 - status: true | msng: Cadastrado com sucesso! <br></br>

        <h5 >
          Status Code 400:
        </h5>
        1 - status: false | msng: Parametros invalidos ou faltando <br></br>

        <h5 >
          Status Code 500:
        </h5>
        1 - status: false | msng: Ocorreu um erro interno, tente novamente <br></br>
        </div>
        

        <div className={styles.description}>
        <h2 >
          Logar
        </h2>
        
          
        URL: <code className={styles.code}>https://cartolol-apirest.vercel.app/api/logar</code>
          <br></br>
        
          <h5 >
          Parâmetros exigidos:
        </h5>
        username:<code className={styles.code}>string</code> <br></br>
        senha:<code className={styles.code}>string</code> 

        <h4 >
          Possiveis retornos:
        </h4>
        <h5 >
          Status Code 200:
        </h5>
        1 - status: true | jwt: jwt.session.token <br></br>
        2 - status: false | msng: Usuario/Senha incorreta <br></br>
        <h5 >
          Status Code 400:
        </h5>
        1 - status: false | msng: Parametros invalidos ou faltando <br></br>

        <h5 >
          Status Code 500:
        </h5>
        1 - status: false | msng: Ocorreu um erro interno, tente novamente <br></br>
        </div>

        <div className={styles.description}>
        <h2 >
          Pegar Lista Players
        </h2>
        
          
        URL: <code className={styles.code}>https://cartolol-apirest.vercel.app/api/get_players_list</code>
          <br></br>
        
          <h5 >
          Parâmetros exigidos:
        </h5>
        lane:<code className={styles.code}>int (1:top|2:jg|3:mid|4:adc|5:sup)</code> 
        <h4 >
          Possiveis retornos:
        </h4>
        <h5 >
          Status Code 200:
        </h5>
        1 - status: true | players: [array] <br></br>
        <h5 >
          Status Code 400:
        </h5>
        1 - status: false | msng: Parametros invalidos ou faltando <br></br>

        <h5 >
          Status Code 500:
        </h5>
        1 - status: false | msng: Ocorreu um erro interno, tente novamente <br></br>
        </div>

        
      </main>
    </div>
  )
}
