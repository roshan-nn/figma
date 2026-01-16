import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Details from './Components/Pages/Details';
import Cart from './Components/Pages/Cart';
import Login from './Components/Login';
import { useState } from 'react';

function App() {
  const[cart, setcart] =useState([]);
  const Addincart =(items)=>{
    console.log(items);
    const cartitem =[
           {
            id:items.id,
            title:items.title,
            image: items.image
           }
    ]
    
    setcart(prevstate => [...prevstate, ...cartitem]);
    
  }
  
  console.log(cart)
  
  
  return (
    <div className="App">
     <Header />
     <BrowserRouter>
     <Routes>
      
      
      <Route path="/" element={<Main Addincart={Addincart} />}/>
      <Route path="/details/:id" element={<Details />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/login" element={<Login />}/>
      
      </Routes>
      </BrowserRouter>
      
    
       
    </div>
  );
}

export default App;
