const apiInfoResult = async (req, res) => {
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
  
        
        const protectedEndpoint = await fetch('https://devtest.a2g.io/api/Result', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify({}) 
        });
        const protectedData = await protectedEndpoint.json();
  
        res.status(200).json(protectedData);
      } else {
      
        res.status(401).json({ error: 'Error de autenticación' });
      }
    } catch (error) {
      
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };
  
  module.exports = { apiInfoResult };
  