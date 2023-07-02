import { Link, useParams } from 'react-router-dom';
import './PlatformDetails.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getApiPlatfomsId } from '../../redux/reducer';
import axios from 'axios';

const PlatformsDetails = () => {

    const URL = 'http://localhost:3001/api/Platforms';
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector((state) => state.apiInfo.platforms);
    
      
    useEffect(() => {
      const getApiPlatfom = async () => {
        try {
          const { data } = await axios(`${URL}/${id}`);
          dispatch(getApiPlatfomsId(data));
         
          
          
        } catch (error) {
          throw error.message;
        }
      }
      getApiPlatfom();
    }, []);
    
  
    if(!details.data) return <h2>Loading ....</h2>

    
    return(
        <div>
            <h1>Detalles de Plataformas</h1>
            <h2>{details.data.name}</h2>
            <h2>{details.data.img}</h2>
            <Link to={details.data.lastReport}>
                <button>
                lastReport
                </button>
            </Link>
            {
                details.data.sensors.map((sensor) => {
                    return(
                        
                        <div key={sensor.id}>
                            <Link to={`/api/Records/${sensor.id}`} id={sensor.id}>
                                <h2>{sensor.name}</h2>
                            </Link>
                            <h2>{sensor.type}</h2>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default PlatformsDetails;
