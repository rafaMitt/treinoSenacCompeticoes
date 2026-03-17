<<<<<<< HEAD
const API_URL = 'http://localhost:3000/funcionarios';
=======
const API_URL = 'http://localhost:3000/funcionarios'
>>>>>>> 500490a223914c449a2123f8cb058578d3500b3e

async function carregarFuncionarios() {

    const response = await fetch(API_URL);
<<<<<<< HEAD
    const funcionarios = response.json();

    const tabela = document.getElementById('tabela-funcionarios');
=======
    const funcionarios = await response.json();

    const tabela = document.getElementById('tabelaFuncionarios');
>>>>>>> 500490a223914c449a2123f8cb058578d3500b3e
    tabela.innerHTML = '';

    funcionarios.forEach(func => {

<<<<<<< HEAD
        const tr = document.createElement('tr');
        tr.innerHTML = `

        <td>${func.id}</td>
        <td>${func.nome}</td>
        <td>${func.cargo}</td>
        <td>${parseFloat(func.salario).toFixed(2)}</td>

        <td>
            <button onclick="editarUsuario(${func.id}, '${func.nome}', '${func.cargo}', ${func.salario})">Editar</button>
            <button onclick="excluirUsuario(${func.id})">Excluir</button>
        </td>
        `; tabela.appendChild(tr);
    });
}

document.getElementById('formFuncionario').addEventListener('submit', async(e) => {

    e.preventDefault();

    
});
=======
        const tr = document.createElement('tr')
        tr.innerHTML = `

            <td>${func.id}</td>
            <td>${func.nome}</td>
            <td>${func.cargo}</td>
            <td>${parseFloat(func.salario).toFixed}</td>
             <td>
                <button onclick="editarFuncionario(${func.id}, '${func.nome}', '${func.cargo}', ${func.salario})>Editar</button>
                <button onclick="excluirFuncionario(${func.id})>Excluir</button>
             </td>
        `; tabela.appendChild(tr)
    });
};

document.getElementById('funcionarioForm').addEventListener('submit', async(e) => {

    e.preventDefault();

    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const salario = document.getElementById('salario').value;
})
>>>>>>> 500490a223914c449a2123f8cb058578d3500b3e
