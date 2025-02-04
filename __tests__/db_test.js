const pool = require("../src/config/db");

async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conexão bem-sucedida!", res.rows);
  } catch (error) {
    console.error("Erro ao conectar:", error);
  } finally {
    await pool.end();
  }
}

testConnection();
