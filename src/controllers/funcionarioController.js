import db from '../config/db.js'

export const listarFuncionarios = (req,res) => {

    db.query('SLECT * FROM funcionarios', (err, results) => {

<<<<<<< HEAD
        if (err) return res.status(500).json({ erro: 'Erro ao listar funcionários' });
        res.json(results);
    });
=======
        if(err) return res.status(500).json ({erro:'Erro ao listar funcionários'});
        res.json(results)
    })
>>>>>>> 88a8cd399a802f3f3d7f4930f458167525d7d23f
}

export const inserirFuncionario = (req, res) => {

    const { nome, cargo, salario } = req.body;
    const sql = 'INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)'
    db.query(sql, [nome, cargo, salario], err => {

<<<<<<< HEAD
    db.query(sql, [nome, cargo, salario], err => {

        if (err) return res.status(500).json({ erro: 'Erro ao inserir funcionário' });
        res.json({ mensagem: 'Funcionário inserido com sucesso!' });
    });
}

export const atualizarFuncionario = (req, res) => {

    const { id } = req.params;
    const { nome, cargo, salario } = req.body;
    const sql = 'UPDATE funcionarios SET nome=?, cargo=?, salario=? WHERE id=?'
    db.query(sql, [nome, cargo, salario, id], err => {

        if (err) return res.status(500).json({ erro: 'Erro ao atualizar funcionário' });
        res.json({ mensagem: 'Funcionario atualizado com sucesso!' })
    })
}

export const excluirFuncionario = (req, res) => {

    const { id } = req.params;
    db.query('DELETE FROM funcionarios WHERE id=?', [id], err => {

        if (err) return res.status(500).json({ erro: 'Erro ao excluir funcionário' });
        res.json({ mensagem: 'Funcionario excluido com sucesso!' })
    });
}

=======
        if(err) return res.status(500).json ({erro:'Erro ao inserir funcionário'});
        res.json({mensagem:'Funcionário inserido com sucesso!'})
    });
};
>>>>>>> 88a8cd399a802f3f3d7f4930f458167525d7d23f
