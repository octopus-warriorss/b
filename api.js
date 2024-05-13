const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

app.get('/api/gif', async (req, res) => {
    try {
        const filePath = `${__dirname}/gif.gif`;
        const gifContent = await fs.readFile(filePath);
        res.send(gifContent);
    } catch (error) {
        console.error('Erro ao obter GIF:', error);
        res.status(500).send('Erro ao obter GIF');
    }
});

app.get('/api/raw', async (req, res) => {
    try {
        const filePath = `${__dirname}/pagina.txt`;
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
        const filePath = `${__dirname}/foto.png`;
        const photoContent = await fs.readFile(filePath);
        res.set('Content-Type', 'image/png');
        res.send(photoContent);
    } catch (error) {
        console.error('Erro ao obter foto:', error);
        res.status(500).send('Erro ao obter foto');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
