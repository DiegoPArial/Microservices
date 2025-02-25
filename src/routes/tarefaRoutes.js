const express = require('express');
const { listarTarefas, buscarTarefaPorId, criarTarefa, atualizarTarefa, deletarTarefa } = require('../controllers/tarefaController');

const router = express.Router();

router.get('/tarefas', listarTarefas);
router.get('/tarefas/:id_tarefa', buscarTarefaPorId); 
router.post('/tarefas', criarTarefa);
router.put('/tarefas/:id_tarefa', atualizarTarefa);
router.delete('/tarefas/:id_tarefa', deletarTarefa);

module.exports = router;
