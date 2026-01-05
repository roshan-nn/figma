import React from 'react'

const Header = () => {
  return (
    <div>
        <ul className='flex p-4 space-x-8'>
            <li>SHOP.CO</li>
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
             <input type="text" placeholder="Search for Products" className='p-2 border-gray-300 rounded-md' /> 
           
            </ul>
           
            
            
    </div>
  )
}

export default Header