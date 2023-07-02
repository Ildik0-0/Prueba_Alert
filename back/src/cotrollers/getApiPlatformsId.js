


const UUID_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

const getApiPlatformsId = async (req, res) => {
  const id = req.params.id;

  if (!UUID_REGEX.test(id)) {
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

      
      const protectedEndpointResponse = await fetch(`https://devtest.a2g.io/api/Platforms/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const protectedData = await protectedEndpointResponse.json();

      
     

      res.status(200).json(protectedData);
    } else {
      
      res.status(401).json({ error: 'Error de autenticación' });
    }
  } catch (error) {
    
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = { getApiPlatformsId };
