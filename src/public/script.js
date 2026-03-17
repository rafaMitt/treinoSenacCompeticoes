const API_URL = 'http://localhost:3000/funcionarios'

async function carregarFuncionarios() {

    const response = await fetch(API_URL);
    const funcionarios = await response.json();

    const tabela = document.getElementById('tabelaFuncionarios');
    tabela.innerHTML = '';

    funcionarios.forEach(func => {

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