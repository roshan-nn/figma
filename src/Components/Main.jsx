import React, { useEffect, useState} from 'react'

const Main = () => {

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
    <div className='h-screen bg-red-600'>
      {data?.map((lists)=>(
        <div className='bg-green-500'>
        <p>{lists?.title}</p>
        <img src={lists?.image}></img>
        <p>{lists?.price}</p>
        </div>
      )
    )}  
        


    </div>
  )
}

export default Main