const express = require('express');
const app = express();
const tarefaRoutes = require('./routes/tarefaRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
    res.send('Microsserviço rodando!');
});

app.use('/api', tarefaRoutes);

app.get('/terms', (req, res) => {
    return res.json({ message: "Termos de Serviço" });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
