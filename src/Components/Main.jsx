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
    <div className='bg-green-600'>
      {data?.map(()=>(
        <p></p>
      )
    )}  
        


    </div>
  )
}

export default Main