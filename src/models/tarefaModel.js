const pool = require('../config/db');

class TarefaModel {
  static async criarTarefa({ titulo, descricao, data_vencimento, status, id_usuario }) {
    const query = `
      INSERT INTO tarefas (titulo, descricao, data_criacao, data_vencimento, status, id_usuario)
      VALUES ($1, $2, NOW(), $3, $4, $5) RETURNING *;
    `;
    const values = [titulo, descricao, data_vencimento, status, id_usuario];

    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async editarTarefa(id_tarefa, { titulo, descricao, data_vencimento, status }) {
    const query = `
      UPDATE tarefas SET titulo = $1, descricao = $2, data_vencimento = $3, status = $4
      WHERE id_tarefa = $5 RETURNING *;
    `;
    const values = [titulo, descricao, data_vencimento, status, id_tarefa];

    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async deletarTarefa(id_tarefa) {
    const query = `
      DELETE FROM tarefas WHERE id_tarefa = $1 RETURNING *;
    `;
    const values = [id_tarefa];

    const { rows } = await pool.query(query, values);
    return rows[0] || null;
  }
}

module.exports = TarefaModel;
