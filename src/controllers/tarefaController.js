const TarefaModel = require('../models/tarefaModel');

const getTarefas = async (req, res) => {
  try {
    const tarefas = await TarefaModel.listarTarefas();
    res.status(200).json(tarefas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar tarefas', detalhes: error.message });
  }
};

const getTarefaPorId = async (req, res) => {
  try {
    const { id_tarefa } = req.params;
    const tarefa = await TarefaModel.buscarTarefaPorId(id_tarefa);

    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    res.status(200).json(tarefa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar tarefa', detalhes: error.message });
  }
};

const criarTarefa = async (req, res) => {
  try {
    const novaTarefa = await TarefaModel.criarTarefa(req.body);
    res.status(201).json(novaTarefa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao criar tarefa', detalhes: error.message });
  }
};

const editarTarefa = async (req, res) => {
  try {
    const { id_tarefa } = req.params;
    const tarefaAtualizada = await TarefaModel.editarTarefa(id_tarefa, req.body);

    if (!tarefaAtualizada) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    res.status(200).json(tarefaAtualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao editar tarefa', detalhes: error.message });
  }
};

const deletarTarefa = async (req, res) => {
  try {
    const { id_tarefa } = req.params;
    const tarefaDeletada = await TarefaModel.deletarTarefa(id_tarefa);

    if (!tarefaDeletada) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    res.status(200).json({ mensagem: 'Tarefa deletada com sucesso', tarefa: tarefaDeletada });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao deletar tarefa', detalhes: error.message });
  }
};

module.exports = { getTarefas, getTarefaPorId, criarTarefa, editarTarefa, deletarTarefa };
