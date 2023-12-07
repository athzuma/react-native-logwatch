let configs;

function config(conf) {
  configs = conf;
}

async function log(message, path) {
  const apiUrl = 'https://logwatch-402958ac818f.herokuapp.com/api';
  const body = {
    message: message,
    app: configs.app,
    path: path,
  };

  console.log(message);

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apiKey: configs.apiKey
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.log('LOGWATCH: Error persisting log in cloud');
    }

    // const data = await res.json();
    // console.log('Resposta da API:', data);
  } catch (erro) {
    console.error('LOGWATCH: \n', erro.message);
  }
};

export const console = {
  config,
  log,
};