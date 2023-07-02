import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../ThemeContext"
import './Cards.css'
const Cards = ({id, name, img, fleet}) => {
    
    const {darkMode} = useContext(ThemeContext)


    
    return(
        <div className={`platform ${darkMode && 'dark'}`}>  
            <div className='row header' >
                <Link to={`/api/Platforms/${id}`}>
                    <h2>Name: {name}</h2>
                </Link>
                    <h2>Fleet: {fleet}</h2>
                <div className='img'>
                    <img src={img}/>
                </div>
            </div>
        </div>
    )
}

export default Cards
