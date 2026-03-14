const express = require("express");
const { get } = require("http");
const app = express()
app.use(express.json())
const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "biblioteca"
})

cadastroLivro = () => {

    app.post("/", (req, res) => {
        const { title, description, publicationYear, category } = req.body;

        const query = "INSERT INTO livros(title, description, publicationYear, category) VALUES(?,?, ?, ?)";
        connection.execute(query, [title, description, publicationYear, category], (err, results) => {
            if (err) {
                console.error("Erro ao cadastrar livro:", err);
                res.status(500).json({ error: "Erro ao cadastrar livro" });
            } else {
                res.status(201).json({ message: "Livro cadastrado com sucesso" });
            }
        });

    })
}


app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
});
