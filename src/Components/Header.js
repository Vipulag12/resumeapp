import React, { useEffect } from 'react'
import {} from "@mui/material"
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'


function Header() {

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      console.log("hd")
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
    <header>
        <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" className='logo' alt="" />
        <div className="inputBox">
            <SearchRounded className='searchicon' />
            <input type="text" placeholder='Search' />
        </div>

        <div className="shoppingCart">
          <ShoppingCartRounded className='cart'/>
          <div className="cart_content">
          <p>2</p>
          </div>
        </div> 
        <div className="profileContainer">
          <div className='imgBox'>
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937" className="profilePic" alt="" />
          </div>
          <h2 className='userName'>Vipul agarwal</h2>
        </div>
        <div className="toggleMenu">
          <BarChart className='toggleIcon'/>
        </div>
    </header>
  )
}

export default Header