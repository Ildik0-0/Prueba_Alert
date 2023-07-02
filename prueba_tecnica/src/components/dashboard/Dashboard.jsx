import { useContext } from 'react';
import './Dashboard.css'
import { ThemeContext } from '../ThemeContext';
import Header from '../header/Header';
import Platforms from '../platform/Platforms';
import PlatformsDetails from '../platformDetail/PlatformDetails';



const Dashboard = () =>{

    const {darkmode} = useContext(ThemeContext)

    return(
        <div className={`main ${darkmode && 'dark'}`}>
   
        <Platforms/>
       
        </div>
    )
}

export default Dashboard;