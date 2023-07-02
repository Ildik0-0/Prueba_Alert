
import { Link } from "react-router-dom"

import './Cards.css'

const Cards = ({id, name, img, fleet}) => {
    
    


    
    return(
        <div className='carta'>  
            <div className='carta-show' >
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
