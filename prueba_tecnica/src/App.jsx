import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Platfoms from './components/platform/Platforms';

import { allPlatfoms} from './redux/reducer'; 
import { useDispatch } from 'react-redux';
import { ThemeContext } from './components/ThemeContext';
import PlatformsDetails from './components/platformDetail/PlatformDetails';
import SensorDetails from './components/sensorDetails/SensorDetails';

import Loging from './components/logingForm/Loging';



function App() {
  
  const URL = 'http://localhost:3001/api/Platforms';
  const url = 'http://localhost:3001/login';
  
  const dispatch = useDispatch();
  const location = useLocation()
  const navigate = useNavigate()
  const [access, setAccess] = useState(false)

  async function login(userData) {

    try {
       const { email, password } = userData;
       const {data} = await  axios(url + `?email=${email}&password=${password}`)
       const { access } = data;
       setAccess(access);
       access && navigate('/dashboard');
    
    } catch (error) {
       console.log(error.message);
    }

    
 }

 useEffect(() => {
    !access && navigate('/')
 }, [access])

 
   
   
    
  
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
        {
            location.pathname !== '/' &&  <Navigation setAccess={setAccess}/>
         }
        <Routes>
          <Route path='/' element={<Loging login={login}/> } />
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/api/Platform' element={<Platfoms/>}></Route>
          <Route path="/api/Platforms/:id" element={<PlatformsDetails />} />
          <Route path="/api/Records/:sensorId" element={<SensorDetails />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
