// import getConfig from "./config";

export default async function logWatch (path, message) {
    // const config = await getConfig();
    const apiUrl = 'https://logwatch-402958ac818f.herokuapp.com/api';
    const body = {
      message: message,
      app: process.env.LOGWATCH_APP,
      path: path,
    };
  
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      if (!res.ok) {
        console.log('Erro >> 1');
      }
  
      const data = await res.json();
  
      console.log('Resposta da API:', data);
    } catch (erro) {
      console.error('Erro: 2 \n', erro.message);
    }
  };
  