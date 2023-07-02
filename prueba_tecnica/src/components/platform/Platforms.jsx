import {  useSelector } from 'react-redux';
import './Platforms.css'

import Cards from '../cards/Cards';


const Platforms = () => {

  const apiInfo = useSelector((state) => state.apiInfo.allPlatforms);
 console.log(apiInfo.data);


  return (
    <div >
        <h1 className='title'>Platforms</h1>
      <div className='container'>
        {apiInfo.data.map(({ id, name, img, fleet }) => (
        <Cards key={id} id={id} name={name} img={img} fleet={fleet} />
      ))}
      </div>
          
      

     
    </div>
  );
};

export default Platforms;
