const express = require('express');
const { criarTarefa, editarTarefa, deletarTarefa } = require('../controllers/tarefaController');

const router = express.Router();

router.post('/tarefas', criarTarefa);
router.put('/tarefas/:id_tarefa', editarTarefa);
router.delete('/tarefas/:id_tarefa', deletarTarefa);

module.exports = router;
