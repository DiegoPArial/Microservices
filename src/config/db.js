const { Pool } = require("pg");

const pool = new Pool({
  user: "diego",
  host: "postgres",
  database: "gerenciador_tarefas",
  password: "diego020304",
  port: 5432,
});

module.exports = pool;
