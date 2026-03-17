<<<<<<< HEAD
import mysql from 'mysql2';

const connection = mysql.createConnection ({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect(err => {

    if(err) {
        console.log('Erro ao se conectar com o MySQL', err);
    } else {
        console.log('Conectdo ao MySQL com sucesso!')
    }
});


=======
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();

const connection = mysql.createConnection ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

connection.connect (err => {

    if(err) {
        console.log('Erro ao conectar com o MySQL', err);
    } else {
        console.log('Concetado ao MySQL com sucesso!')
    }
});

>>>>>>> 33b7cfc3b77577e39dfe089fb70877b657315f3b
export default connection;