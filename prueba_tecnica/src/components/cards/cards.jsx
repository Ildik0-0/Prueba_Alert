import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../ThemeContext"
import './Cards.css'

const Cards = ({id, name, img, fleet}) => {
    
    


    
    return(
        <div className='carta'>  
            <div className='rowHeader' >
                <Link to={`/api/Platforms/${id}`}>
                    <button className="buttonDetails">{name}</button>
                </Link>
                    <h2> {fleet}</h2>
                        <div >
                    <img className='img' src={img}/>
                </div>
            </div>
        </div>
    )
}

export default Cards
