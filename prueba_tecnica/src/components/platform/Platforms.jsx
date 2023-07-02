import {  useSelector } from 'react-redux';
import './Platforms.css'

import Cards from '../cards/Cards';
import { useState } from 'react';


// const Platforms = () => {

//  const apiInfo = useSelector((state) => state.apiInfo.allPlatforms);
//  const [page, setPage] = useState(1);
//  const [itemsShow] = useState(6)
 
//  const lastShowItem = page * itemsShow;
//  const firtsShowItem = lastShowItem - itemsShow
//  const itemsShowPage = apiInfo.data.slice(lastShowItem, firtsShowItem)

//  const handlePageChange = (numberPage)  =>  {
//   setPage(numberPage)
//  }

//   return (
//     <div >
//         <h1 className='title'>Platforms</h1>
//       <div className='container'>
//         {itemsShowPage.map(({ id, name, img, fleet }) => (
//         <Cards key={id} id={id} name={name} img={img} fleet={fleet} />
//       ))}
//       </div>
          
//       {
//         apiInfo.data.length > itemsShow && 
//         (
//           <div>
//             <button onClick={() => handlePageChange(page - 1)}>
//               ⬅
//             </button>
//             <button onClick={() => handlePageChange(page - 2)}>
//               ➡
//             </button>
//           </div>
//         )
//       }

     
//     </div>
//   );
// };

// export default Platforms;

const Platforms = () => {
  const apiInfo = useSelector((state) => state.apiInfo.allPlatforms);
  const [page, setPage] = useState(1);
  const [itemsShow] = useState(6);
 
  const lastShowItem = page * itemsShow;
  const firstShowItem = lastShowItem - itemsShow;
  const itemsShowPage = apiInfo.data.slice(firstShowItem, lastShowItem);

  const handlePageChange = (numberPage) => {
    setPage(numberPage);
  };

  return (
    <div>
      <h1 className='title'>Platforms</h1>
      <div className='container'>
        {itemsShowPage.map(({ id, name, img, fleet }) => (
          <Cards key={id} id={id} name={name} img={img} fleet={fleet} />
        ))}
      </div>
          
      <div className='pagination-platform'> 
      {
        apiInfo.data.length > itemsShow && (
          <div>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
              ⬅
            </button>
            <button onClick={() => handlePageChange(page + 1)} disabled={lastShowItem >= apiInfo.data.length}>
              ➡
            </button>
          </div>
      )}
      </div> 
    </div>
  );
};

export default Platforms;
