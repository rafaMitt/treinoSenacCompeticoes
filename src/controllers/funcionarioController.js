import db from '../config/db.js';

export const listarFuncionarios = (req, res) => {

    db.query('SELECT * FROM funcionarios', (err, results) => {

        if (err) return res.sttus(500).json({ erro: 'Erro ao listar funcionários' });
        res.json(results)
    });
};

export const inserirFuncionario = (req, res) => {

    const { nome, cargo, salario } = req.body;
    const sql = 'INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)';

    db.query(sql, [nome, cargo, salario], err => {

        if (err) return res.status(500).json({ erro: 'Erro ao inserir funcionário' })
    });
};

export const atualizarFuncionario = (req, res) => {

    const { id } = req.params;
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