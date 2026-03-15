import express from 'express'
import {
    inserirFuncionario,
    listarFuncionarios
} from '../controllers/funcionarioControllers.js'

const router = express.Router();

router.get('/', listarFuncionarios);
router.post('/', inserirFuncionario);

export default router;