const express = require('express');
const { listarUsuarios, criarUsuario, buscarUsuarioPorId, atualizarUsuario, deletarUsuario } = require('../controllers/usuarioController');

const router = express.Router();

router.get('/usuarios', listarUsuarios);
router.get('/usuarios/:id_usuario', buscarUsuarioPorId);
router.post('/usuarios', criarUsuario);
router.put('/usuarios/:id_usuario', atualizarUsuario);
router.delete('/usuarios/:id_usuario', deletarUsuario);

module.exports = router;
