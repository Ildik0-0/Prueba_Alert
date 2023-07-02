import { Link, NavLink, useParams } from 'react-router-dom';
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
        <div className='details-platform'>
           <div className='div-sensor'>
           <h1 className='plat-h1-details'>Platforms Details</h1>
            <h2 className='plat-h2-details'>{details.data.name}</h2>
            {/* <h2 className='detailH2'>{details.data.img}</h2> */}
           
              <div className='sensor-grip'>
                  {
                      details.data.sensors.map((sensor) => {
                          return(
                              
                              <div className='sensor-map' key={sensor.id}>
                                <div className='sensor-letter-div'>
                                  <h2 className='sensor-letter'>{sensor.type}</h2>
                                </div>
                                  <NavLink className='platform-details-txt' to={`/api/Records/${sensor.id}`} id={sensor.id}>
                                      <button className='sensor-btn'>{sensor.name}</button>
                                  </NavLink>
                                  
                              </div>
                          )
                      })
                  }
              </div>
              <Link to={details.data.lastReport}>
                <button className='btn-report'>
                 Last Report
                </button>
            </Link>
           </div>
        </div>
    )
}

export default PlatformsDetails;
