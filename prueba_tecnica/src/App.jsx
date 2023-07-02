import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
//Importacion Axios
import axios from 'axios';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Platfoms from './components/platform/Platforms';

import { allPlatfoms} from './redux/reducer'; // Importa correctamente la acción allPlatfoms
import { useDispatch } from 'react-redux';
import { ThemeContext } from './components/ThemeContext';
import PlatformsDetails from './components/platformDetail/PlatformDetails';
import SensorDetails from './components/sensorDetails/sensorDetails';
 
function App() {
  
  
 
    const URL = 'http://localhost:3001/api/Platforms';
   
   
    const dispatch = useDispatch();
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const {data} = await axios.get(URL);
          dispatch(allPlatfoms(data)); 
          
        } catch (error) {
          console.error('Error al obtener los datos de la API:', error);
        }
      };
  
      fetchData();
    }, []);
  
  const [darkmode, setDarkMode] = useState(true);
  return (
  
    <ThemeContext.Provider value={{darkmode, setDarkMode}} >
      <div className='App'>
        <Navigation/>
        <Dashboard/>
        <Routes>
          
          <Route path='/api/Platform' element={<Platfoms/>}></Route>
          <Route path="/api/Platforms/:id" element={<PlatformsDetails />} />
          <Route path="/api/Records/:sensorId" element={<SensorDetails />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
