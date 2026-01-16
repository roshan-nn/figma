import React from 'react'

const Header = ({cartdata}) => {
  console.log(cartdata, "cart");
  
  // const num= cartdata.length;
  // console.log(num);
  return (
    <div className='h-10 bg-green-500'>
        <ul className='flex p-4 space-x-8 '>
            <li>SHOP.CO</li>
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
             <input type="text" placeholder="Search for Products" className='p-2 border-gray-300 rounded-md' /> 
           
            </ul>
           
            <div className='w-10 photo'>
              <img className='w-0.5' src={require("./images/Rectangle 6 (1).png")} alt="pic" />
      
    </div>
            
    </div>

    
  )
}

export default Header