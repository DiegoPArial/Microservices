const Tarefa = require('../models/tarefaModel');
const Usuario = require('../models/usuarioModel');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  try {
    const { titulo, descricao, data_vencimento, status, id_usuario } = req.body;

    // Verifica se o usuário existe antes de criar a tarefa
    const usuarioExiste = await Usuario.findByPk(id_usuario);
    if (!usuarioExiste) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const tarefa = await Tarefa.create({ titulo, descricao, data_vencimento, status, id_usuario });
    res.status(201).json(tarefa);
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};


// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};

// Buscar tarefa por ID
exports.buscarTarefaPorId = async (req, res) => {
  try {
    const { id_tarefa } = req.params;
    const tarefa = await Tarefa.findByPk(id_tarefa);
    if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }
};

// Atualizar tarefa por ID
exports.atualizarTarefa = async (req, res) => {
  try {
    const { id_tarefa } = req.params;
    const { titulo, descricao, data_vencimento, status } = req.body;
    const tarefa = await Tarefa.findByPk(id_tarefa);
    if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });

    await tarefa.update({ titulo, descricao, data_vencimento, status });
    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

// Deletar tarefa por ID
exports.deletarTarefa = async (req, res) => {
  try {
    const { id_tarefa } = req.params;
    const tarefa = await Tarefa.findByPk(id_tarefa);
    if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });

    await tarefa.destroy();
    res.json({ message: 'Tarefa deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
};
