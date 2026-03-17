import db from '../config/db.js';

export const listarFuncionarios = (req, res) => {

    db.query('SELECT * FROM funcionarios', (err, results) => {

<<<<<<< HEAD
        if (err) return res.sttus(500).json({ erro: 'Erro ao listar funcionários' });
        res.json(results)
=======
        if (err) return res.status(500).json({ erro: 'Erro ao listr funcionários' });
        res.json(results);
>>>>>>> 33b7cfc3b77577e39dfe089fb70877b657315f3b
    });
};

export const inserirFuncionario = (req, res) => {

<<<<<<< HEAD
    const { nome, cargo, salario } = req.body;
    const sql = 'INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)';

    db.query(sql, [nome, cargo, salario], err => {

        if (err) return res.status(500).json({ erro: 'Erro ao inserir funcionário' })
=======
    const {nome, cargo, salario} = req.body;
    const sql = 'INSERT INTO funcionarios (nome, cargo, salario) VALUES ( ?, ?, ?)'

    db.query( sql, [nome, cargo, salario], err => {

        if(err) return res.status(500).json({ erro:'Erro ao inserir funcionário'});
        res.json({ mensagem:'Funcionário inserido com sucesso'})
>>>>>>> 33b7cfc3b77577e39dfe089fb70877b657315f3b
    });
};

export const atualizarFuncionario = (req, res) => {

    const { id } = req.params;
<<<<<<< HEAD
    const { nome, cargo, salario } = req.body;

    db.query('UPDATE funcionarios SET nome=?, cargo=?, salario=? WHERE id=?', [nome, cargo, salario, id], err => {

        if (err) return res.status(500).json({ erro: 'Erro ao atualizar funcionário' });
        res.json({ mensagem: 'Funcionário atualizado com sucesso!' })
    });
};

export const excluirFuncionario = (req,res) => {

    const { id } = req.params;

    db.query('DELETE FROM funcionarios WHERE id=?', [ id ], err => {

        if(err) return res.status(500).json ({ erro:'Erro ao excluir funcionário'});
        res.json({ mensagem:'Funcionário excluido com sucesso!'})
    })
}
=======
    const {nome, cargo, salario} = req.body;
    const sql = 'UPDATE funcionarios SET nome=?, cargo=?, salario=? WHERE id=?'
    db.query( sql, [nome, cargo, salario, id], err => {

        if(err) return res.status(500).json ({ erro:'Erro ao atualizar funcionário'});
        res.json({ mensagem:'Funcionário atualziado com sucesso!'});
    });
};

export const excluirFuncionario = (req, res) => {

    const { id } = req.params;

    db.query('DELETE FROM funcionarios WHERE id=?', [id], err => {
        
        if(err) return res.status(500).json ({ erro:'Erro ao excluir funcionário'});
        res.json({ mensagem:'Funcionário excluido com sucesso!'})
    });
};
>>>>>>> 33b7cfc3b77577e39dfe089fb70877b657315f3b
