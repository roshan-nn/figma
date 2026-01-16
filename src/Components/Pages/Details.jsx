import React, {useEffect, useState} from "react";
import { data, useParams,Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Details = () => {
 
const [itemdetails, setitemdetails]= useState("")
const navigate = useNavigate();
const [cartitem, setcartitem] = useState("")
const [addbtn, setbtn] = useState()


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

useEffect(()=>{
  if(addbtn){
    carthandler()
  }
},[addbtn])

const Added=()=>{
  console.log("addbtn")
  setbtn(true);
}
if(cartitem){
  alert("added")
  navigate("/")
}

const cart = { userId: 1, products: [{ id: {id} }] };

function carthandler(){
 

axios.post('https://fakestoreapi.com/carts', cart)
  .then(response => {console.log(response.data)
 setcartitem(response.data)});
}

  return (


    <div>
        <div key={itemdetails.id}>
            <img src={itemdetails?.image}></img>
            <h1>{itemdetails.title}</h1>
            <Link to="/cart"><button onClick={Added}>Add to cart</button></Link>

        </div>
       

   
    </div>
  )
}

export default Details