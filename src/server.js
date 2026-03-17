import express from 'express'
import dotenv from 'dotenv'
import funcionarioRoutes from './routes/funcionarioRoutes.js'
dotenv.config();

const app = express();
app.use(express.json());
app.use('/funcionarios', funcionarioRoutes);

const PORT = process.env.PORT || 3000;
<<<<<<< HEAD
app.listen(PORT, () => {

    console.log(`Servidor rodando em http://localhost:${PORT}`)
});
=======
app.listen(PORT, () => 
    console.log(`Servidor rodando em http://localhost:${PORT}`)
);
>>>>>>> 33b7cfc3b77577e39dfe089fb70877b657315f3b
