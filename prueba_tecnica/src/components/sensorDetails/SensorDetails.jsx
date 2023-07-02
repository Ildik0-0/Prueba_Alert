

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SensorDetails.css';

const SensorDetails = () => {
  const URL = 'http://localhost:3001/api/Records';
  const url = 'http://localhost:3001/api/Result';
  const { sensorId } = useParams();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState({
    bajo: 0,
    medio: 0,
    alto: 0
  });
  const [dataRange, setDataRange] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`${URL}/${sensorId}`);
        const data = response.data;

        if (response.status === 200) {
          setCategories(data.registros);
          setDataRange(data.cantidadDatosEnRango);

         
          const resultResponse = await axios.post(url, {
            categories: data.registros,
            dataRange: data.cantidadDatosEnRango
          });

          console.log('Respuesta del endpoint api/Result:', resultResponse.data);
        } else {
          console.error('Error fetching sensor data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sensorId]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Sensor</h2>
      <h2>Count of Categories:</h2>
      <ul>
        <li>Bajo: {categories.bajo}</li>
        <li>Medio: {categories.medio}</li>
        <li>Alto: {categories.alto}</li>
      </ul>
      <h2>Data Range:</h2>
      <p>{dataRange} data points</p>
    </div>
  );
};

export default SensorDetails;
