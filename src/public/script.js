const API_URL = 'http://localhost:3000/funcionarios';

async function carregarFuncionarios() {

    const response = await fetch(API_URL);
    const funcionarios = response.json();

    const tabela = document.getElementById('tabela-funcionarios');
    tabela.innerHTML = '';

    funcionarios.forEach(func => {

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