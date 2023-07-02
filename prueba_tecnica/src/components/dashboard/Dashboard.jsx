import { useContext } from 'react';
import './Dashboard.css'
import { ThemeContext } from '../ThemeContext';
import Header from '../header/Header';


const Dashboard = () =>{

    const {darkmode} = useContext(ThemeContext)

    return(
        <div className={`main ${darkmode && 'dark'}`}>
           <Header/>
         
        </div>
    )
}

export default Dashboard;