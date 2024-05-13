const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

app.get('/api/gif', async (req, res) => {
    try {
        const filePath = `${__dirname}/foto.png`;

        const photoContent = await fs.readFile(filePath);

        // Converte o conteúdo da foto para uma URL de dados (data URL) no formato base64
        const dataUrl = `data:image/png;base64,${photoContent.toString('base64')}`;

        // Retorna a URL de dados como resposta
        res.send(`<img src="${dataUrl}" alt="foto">`);
    } catch (error) {
        console.error('Erro ao obter a foto:', error);
        res.status(500).send('Erro ao obter a foto');
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

        // Converte o conteúdo da foto para uma URL de dados (data URL) no formato base64
        const dataUrl = `data:image/png;base64,${photoContent.toString('base64')}`;

        // Retorna a URL de dados como resposta
        res.send(`<img src="${dataUrl}" alt="foto">`);
    } catch (error) {
        console.error('Erro ao obter a foto:', error);
        res.status(500).send('Erro ao obter a foto');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
