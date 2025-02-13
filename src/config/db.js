const { Pool } = require("pg");

const pool = new Pool({
  user: "diego",
  host: "localhost",
  database: "gerenciador_tarefas",
  password: "diego020304",
  port: 5432,
});

module.exports = pool;
