const {createPool} = require("mysql");
const pool = createPool({
    host: 'db4free.net',
    user: 'cartolol',
    password: 'comesebebes',
    port: 3306,
    database: 'cartolol'
})

pool.getConnection((err)=>{
    if(err){
        console.log('Erro ao conectar na DB')
    }
    console.log('Conectado na DB')
});

const executeQuery = (query, arraParms) => {
    return new Promise((resolve, reject) =>{
        try
        {
            pool.query(query, arraParms, (err, data) =>{
                if(err){
                    console.log("Erro executando a Query");
                    reject(err);
                }
                resolve(data);
            })
        } catch(err)
        {
            reject(err);
        }
    })
}

module.exports = {executeQuery};