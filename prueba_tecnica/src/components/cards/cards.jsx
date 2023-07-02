import { Link } from "react-router-dom"

const Cards = ({id, name, img, fleet}) => {
    



    
    return(
        <div className='card' >
            <Link to={`/api/Platforms/${id}`}>
                <h2>Name: {name}</h2>
            </Link>
                <h2>Fleet: {fleet}</h2>
            <div className='img'>
                <img src={img}/>
            </div>
        </div>
    )
}

export default Cards
