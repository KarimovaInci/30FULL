import React from 'react'
import {Link} from "react-router-dom"
import "./Header.scss"

const Header = () => {
  return (
   <>
   <div className="custom__nav">
     <div className="custom__nav__left">
       <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png.webp" alt="" />
     </div>
     <div className="custom__nav__right">
       <Link to="/"  className='home'>HOME</Link>
       <Link to="/add">ADD</Link>
       <Link to="/wish">WISHLIST</Link>
     </div>
   </div>



   </>
  )
}

export default Header