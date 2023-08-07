import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Menu } from '@mui/material';
import MenuContainer from './Components/MenuContainer';
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect, useState} from 'react';
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import {MenuItems, Items} from "./Components/Data"
import ItemCard from './Components/itemCard';
import DebitCard from './Components/DebitCard';
import CartItem from './Components/CartItem';
import { useStateValue } from './Components/StateProvider';
function App() {
  
  // main dish state

  const [isMainData, setMainData] =useState(
    Items.filter(element=>element.itemId==="buger01")
  )
  const [{cart}, dispatch] = useStateValue()
  useEffect(()=>{
    const menuLi = document.querySelectorAll("#menu li");
    function setMenu(){
      menuLi.forEach(n=>n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach(n=>n.addEventListener('click', setMenu))

    // menu card active toggle
    const menuCards = document.querySelectorAll(".rowContainer .rowMenuCard");
    function setMenuCardActive(){
      menuCards.forEach(n=>n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n)=>n.addEventListener("click" , setMenuCardActive))
  },[isMainData,cart])

  // set main item using filter
  const setData=(itemId)=>{
    setMainData( Items.filter(element=>element.itemId===itemId))
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName link={"#"} discount={"20"} name={"Vipul"} />
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337" alt="" className="deliverypic" />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"}/>
            </div>
          </div>
          <div className="rowContainer">
          {
          MenuItems && MenuItems.map((data)=>(
            
            <div key={data.id} onClick={()=>setData(data.itemId)}>
              <MenuCard imgSrc={data.imgSrc } name={data.name} isActive={data.id===1?true : false} />
            </div>
          ))
          }
          </div>
          <div className="dishItemContainer">
            {
              isMainData && isMainData.map((data)=>(

                <ItemCard 
                key={data.id}
                itemId={data.id}
                imgSrc={data.imgSrc} name={data.name} ratings={data.ratings} price={data.price} />
              ))
            }
          </div>
        </div>
        <div className="rightMenu">
            <div className='debitCardContainer'>
              <div className="debitCard">
              <DebitCard/>
              </div>
            </div>
            {!cart ?<div></div>:
            <div className="cartCheckOutContainer">
            <div className="cartContainer">
            <SubMenuContainer name={"Carts Items"}/>
            <div className="cartItems">
              {
                cart && cart.map((data)=>(
                  <CartItem key={data.id} itemId={data.id} name={data.name} imgSrc={data.imgSrc} price={data.price} />
                ))
              }
            
            </div>
            </div>

            <div className="totalSection">
              <h3>Total</h3>
              <p>
                <span>$ 45.0</span>
              </p>
            </div>
            <button className="checkOut">Checkout</button>
          </div>
            }
            
        </div>
      </main>

      <div className="bottomMenu">
        <ul id='menu'>
          <MenuContainer link={"#"} icon ={<HomeRounded/>} isHome /> 
          <MenuContainer link={"#"} icon ={<Chat/>}  /> 
          <MenuContainer link={"#"} icon ={<AccountBalanceWalletRounded/>}  /> 
          <MenuContainer link={"#"} icon ={<Favorite/>}  /> 
          <MenuContainer link={"#"} icon ={<SummarizeRounded/>}  /> 
          <MenuContainer link={"#"} icon ={<Settings/>}  /> 
          <div className="indicator">

          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
