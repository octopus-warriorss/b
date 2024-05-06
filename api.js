const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

const externalGifUrl = 'https://media.discordapp.net/attachments/1213611522623021056/1229000936366800916/D205B05F-C2D9-41CF-B1F1-FFC522741BFF.gif?ex=6639f4d0&is=6638a350&hm=4a65e8c5e9c9723a5cc80cb181ffed37044cdeb05afbaa2f866ff5d11264d3c5&='; // Substitua 'URL_DO_SEU_GIF_AQUI' pelo URL do GIF externo desejado

app.get('/api/gif', (req, res) => {
    // Redirecione para o URL do GIF externo
    res.redirect(externalGifUrl);
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

        res.set('Content-Type', 'image/jpeg');
        res.send(gifContent);
    } catch (error) {
        console.error('Erro ao obter GIF:', error);
        res.status(500).send('Erro ao obter GIF');
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
