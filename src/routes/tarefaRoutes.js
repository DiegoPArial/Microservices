const express = require('express');
const { getTarefas, getTarefaPorId, criarTarefa, editarTarefa, deletarTarefa } = require('../controllers/tarefaController');

const router = express.Router();

router.get('/tarefas', getTarefas);
router.get('/tarefas/:id_tarefa', getTarefaPorId);
router.post('/tarefas', criarTarefa);
router.put('/tarefas/:id_tarefa', editarTarefa);
router.delete('/tarefas/:id_tarefa', deletarTarefa);

module.exports = router;
