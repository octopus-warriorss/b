const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

app.get('/api/gif', async (req, res) => {
    try {
        const filePath = `${__dirname}/foto.png`; // Obtém o caminho completo do arquivo gif.gif

        const gifContent = await fs.readFile(filePath);

        res.set('Content-Type', 'image/gif'); // Especifica que o conteúdo é um GIF
        res.send(gifContent);
    } catch (error) {
        console.error('Erro ao obter GIF:', error);
        res.status(500).send('Erro ao obter GIF');
    }
});

// Rota para obter o conteúdo bruto do arquivo pagina.txt
app.get('/api/raw', async (req, res) => {
    try {
        const filePath = `${__dirname}/pagina.txt`; // Obtém o caminho completo do arquivo pagina.txt

        const fileContent = await fs.readFile(filePath, 'utf-8');

        res.set('Content-Type', 'text/plain');
        res.send(fileContent);
    } catch (error) {
        console.error('Erro ao obter conteúdo bruto:', error);
        res.status(500).send('Erro ao obter conteúdo bruto');
    }
});

app.get('/api/fotin', async (req, res) => {
    try {
        const filePath = `${__dirname}/foto.png`; // Obtém o caminho completo do arquivo gif.gif

        const gifContent = await fs.readFile(filePath);

        res.send(gifContent); // Envie o conteúdo bruto da foto sem especificar o tipo de conteúdo
    } catch (error) {
        console.error('Erro ao obter GIF:', error);
        res.status(500).send('Erro ao obter GIF');
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
