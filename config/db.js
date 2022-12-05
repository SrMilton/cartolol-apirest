const {createPool} = require("mysql");
const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_DATA
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