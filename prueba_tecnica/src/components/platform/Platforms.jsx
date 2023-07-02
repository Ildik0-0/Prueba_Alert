import {  useSelector } from 'react-redux';


import Cards from '../cards/cards';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Platforms = () => {
const {darkMode} = useContext(ThemeContext)
  const apiInfo = useSelector((state) => state.apiInfo.allPlatforms);
 console.log(apiInfo.data);


  return (
    <div className={`platform ${darkMode && 'dark'}`}>

     
      {apiInfo.data.map(({ id, name, img, fleet }) => (
        <Cards key={id} id={id} name={name} img={img} fleet={fleet} />
      ))}

     
    </div>
  );
};

export default Platforms;
