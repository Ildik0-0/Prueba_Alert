import { useContext } from 'react';
import './Dashboard.css'
import { ThemeContext } from '../ThemeContext';
import Header from '../header/Header';
import Platforms from '../platform/Platforms';
import PlatformsDetails from '../platformDetail/PlatformDetails';



const Dashboard = () =>{

    const {darkMode} = useContext(ThemeContext)

    return(
        <div className='main'>
   
            <h1>Hola</h1>
       
        </div>
    )
}

export default Dashboard;