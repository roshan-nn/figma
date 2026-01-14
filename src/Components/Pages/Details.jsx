import React, {useEffect, useState} from "react";
import { data, useParams,Link } from "react-router-dom";



const Details = () => {
const [itemdetails, setitemdetails]= useState("")

const { id } = useParams();
// const url = process.env.REACT_APP_API_URL;


useEffect(() => {
    itemDetails();
}, [id]); 

function itemDetails(){
    fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data =>{ console.log(data)
setitemdetails(data)});
}




  return (


    <div>
        <div key={itemdetails.id}>
            <img src={itemdetails?.image}></img>
            <h1>{itemdetails.title}</h1>
            {/* <Link to="/cart"><button>Add to cart</button></Link> */}

        </div>
       

   
    </div>
  )
}

export default Details