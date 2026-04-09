<<<<<<< HEAD
import express from 'express';
import {
    listarFuncionarios,
    inserirFuncionario,
    atualizarFuncionario,
    excluirFuncionario
} from '../controllers/funcionarioController.js'

const router = express.Router();

router.get('/', listarFuncionarios);
router.post('/', inserirFuncionario);
router.put('/:id', atualizarFuncionario);
router.delete('/:id', excluirFuncionario);


export default router;
=======
import express from 'express'
import dotenv from 'dotenv'
>>>>>>> 88a8cd399a802f3f3d7f4930f458167525d7d23f
