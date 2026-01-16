import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
// import Details from '../Pages/Details';

const Main = ({Addincart}) => {
  // const url=process.env.REACT_APP_API_URL;
  // console.log(url, "link");

    const[data, setData] = useState([]);
    useEffect(()=>{
       access()
    },[])

    const access=()=>{fetch('https://fakestoreapi.com/products')

        .then(res=>res.json())
        .then(acc=>{
            console.log(acc);
            setData(acc);
        })
    }
 
    // console.log(acc, "array");


  return (
    <div className='flex grid h-screen grid-cols-3 bg-red-600'>
      {data?.map((lists)=>(
        <div className='bg-green-500 card ' key={lists.id}>
        <p>{lists?.title}</p>
        
        <img src={lists?.image}></img>
        <p>{lists?.price}</p>
        { <Link to={`/details/${lists.id}`}>View button</Link>}
        <button onClick={()=>Addincart(lists)}>Add in cart</button>
        </div>
      )
    )}  
         {/* <Link to={`/details/${items.id}`}>View Details</Link> */}


    </div>
  )
}

export default Main