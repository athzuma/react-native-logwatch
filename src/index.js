// export logWatch from './logwatch';

const fs = require('fs');
const path = require('path');

const lerConfiguracao = () => {
  const caminhoConfig = path.join(process.cwd(), 'logwatch.config');

  try {
    const config = require(caminhoConfig);
    // Faça o que for necessário com as configurações
    console.log('Configurações lidas:', config);
  } catch (erro) {
    console.error('Erro ao ler configurações:', erro);
  }
};

module.exports = {
    logWatch,
};