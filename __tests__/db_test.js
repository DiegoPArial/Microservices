const sequelize = require('../src/config/sequelize');

async function testarConexao() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados bem-sucedida!');
  } catch (error) {
    console.error('❌ Erro ao conectar no banco:', error);
  } finally {
    await sequelize.close();
  }
}

testarConexao();
