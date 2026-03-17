import express from 'express'
<<<<<<< HEAD
import { 
    
    listarFuncionarios,
    inserirFuncionario

} from '../controllers/funcionarioController.js'
=======
import {
    listarFuncionarios,
    inserirFuncionario,
    atualizarFuncionario,
    excluirFuncionario,
} from '../controllers/funcionarioController.js'             
>>>>>>> 33b7cfc3b77577e39dfe089fb70877b657315f3b

const router = express.Router();

router.get('/', listarFuncionarios);
router.post('/', inserirFuncionario);
<<<<<<< HEAD
=======
router.put('/:id', atualizarFuncionario);
router.delete('/:id', excluirFuncionario);
>>>>>>> 33b7cfc3b77577e39dfe089fb70877b657315f3b

export default router;