'use strict';

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable("usuarios", {
    id_usuario: { type: "int", primaryKey: true, autoIncrement: true },
    nome: "string",
    email: { type: "string", unique: true },
    senha: "string",
  }).then(() =>
    db.createTable("tarefas", {
      id_tarefa: { type: "int", primaryKey: true, autoIncrement: true },
      titulo: "string",
      descricao: "string",
      data_criacao: "timestamp",
      data_vencimento: "timestamp",
      status: "string",
      id_usuario: {
        type: "int",
        notNull: true,
        foreignKey: {
          name: "fk_usuario",
          table: "usuarios",
          mapping: "id_usuario",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT",
          },
        },
      },
    })
  );
};

exports.down = function (db) {
  return db.dropTable("tarefas").then(() => db.dropTable("usuarios"));
};

exports._meta = {
  "version": 1
};
