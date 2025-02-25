const { DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');
const Usuario = require('./usuarioModel');

const Tarefa = sequelize.define('Tarefa', {
  id_tarefa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data_criacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  data_vencimento: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id_usuario',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'tarefas',
  timestamps: false,
});

Tarefa.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Usuario.hasMany(Tarefa, { foreignKey: 'id_usuario' });

module.exports = Tarefa;
