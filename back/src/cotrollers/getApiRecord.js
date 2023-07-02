

const UUID_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
const moment = require('moment-timezone');


const apiInfoRecord = async (req, res) => {
  const sensorId = req.params.sensorId;

  if (!UUID_REGEX.test(sensorId)) {
    return res.status(400).json({ error: 'Formato de ID inválido' });
  }

  try {
 
    const authResponse = await fetch('https://devtest.a2g.io/api/Auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'iremar.rivas@gmail.com',
        password: 'VUg4hVzvx1HFuxnhfDRn'
      })
    });
    const authData = await authResponse.json();

    if (authResponse.ok) {
      const accessToken = authData.token;

     
      const protectedEndpoint = await fetch(`https://devtest.a2g.io/api/Records/${sensorId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const protectedData = await protectedEndpoint.json();

     
      const showResult = protectedData.data;

      
      let bajo = 0;
      let medio = 0;
      let alto = 0;

      showResult.forEach((showResult) => {
        const valor = showResult.value;

          if (valor >= 0 && valor < 60) {
            bajo++;
          } else if (valor >= 60 && valor < 120) {
            medio++;
          } else if (valor >= 120 && valor <= 200) {
            alto++;
          }
      });

      
      const t1 = moment.tz('10-04-2023 08:00', 'DD-MM-YYYY HH:mm', 'America/Santiago').utc().toISOString();
      const t2 = moment.tz('11-04-2023 20:00', 'DD-MM-YYYY HH:mm', 'America/Santiago').utc().toISOString();

      const dataInRange = showResult.filter((showResult) => {
        const timestamp = moment(showResult.TS).utc().toISOString();
        return timestamp >= t1 && timestamp <= t2;
      });

      const volumeRangeData = dataInRange.length;

    
      const responseData = {
        records: {
          bajo,
          medio,
          alto
        },
        volumeRangeData
      };

      res.status(200).json(responseData);
    } else {
      
      res.status(401).json({ error: 'Error de autenticación' });
    }
  } catch (error) {
    
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = { apiInfoRecord };
