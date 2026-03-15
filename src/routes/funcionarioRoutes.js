import express from 'express'
import {
    atualizarFuncionario,
    excluirFuncionario,
    inserirFuncionario,
    listarFuncionarios
} from '../controllers/funcionarioControllers.js'

const router = express.Router();

router.get('/', listarFuncionarios);
router.post('/', inserirFuncionario);
router.put('/:id', atualizarFuncionario);
router.delete('/:id', excluirFuncionario);

export default router;