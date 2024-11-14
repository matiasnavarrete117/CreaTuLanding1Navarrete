import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const Navbar = ({count}) => {
  return (
    <div className='flex'>
    <h3>Navbar</h3>
    <CartWidget count={count}/>
    </div>
  )
}

export default Navbar
