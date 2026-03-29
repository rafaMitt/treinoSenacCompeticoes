import db from '../config/db.js'

export const listarFuncionarios = (req,res) => {

    db.query('SLECT * FROM funcionarios', (err, results) => {

        if(err) return res.status(500).json ({erro:'Erro ao listar funcionários'});
        res.json(results)
    })
}

export const inserirFuncionario = (req,res) => {

    const { nome, cargo, salario } = req.body;
    const sql = 'INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)'
    db.query(sql, [nome, cargo, salario], err => {

        if(err) return res.status(500).json ({erro:'Erro ao inserir funcionário'});
        res.json({mensagem:'Funcionário inserido com sucesso!'})
    });
};