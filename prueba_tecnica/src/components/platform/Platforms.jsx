import {  useSelector } from 'react-redux';
import './Platforms.css'

import Cards from '../cards/Cards';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Platforms = () => {
const {darkMode} = useContext(ThemeContext)
  const apiInfo = useSelector((state) => state.apiInfo.allPlatforms);
 console.log(apiInfo.data);


  return (
    <div className={`platform ${darkMode && 'dark'}`}>
      <div>
        <h1 className='txt-head'>Platforms</h1>
        {apiInfo.data.map(({ id, name, img, fleet }) => (
        <Cards key={id} id={id} name={name} img={img} fleet={fleet} />
      ))}
      </div>
          
      

     
    </div>
  );
};

export default Platforms;
