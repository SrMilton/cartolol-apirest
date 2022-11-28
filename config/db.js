const {createPool} = require("mysql");
const pool = createPool({
    host: "sql10.freemysqlhosting.net",
    user: "sql10581308",
    password: "fjLL4qE4UP",
    port: 3306,
    database: "sql10581308"
})

pool.getConnection((err)=>{
    if(err){
        console.log('Error connecting to db..')
    }
    console.log('Connected to db..')
});

const executeQuery = (query, arraParms) => {
    return new Promise((resolve, reject) =>{
        try
        {
            pool.query(query, arraParms, (err, data) =>{
                if(err){
                    console.log("Error in executing the query");
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