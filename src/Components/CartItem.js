import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React, {useEffect, useState} from 'react'
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

let cartItem = [];

function CartItem({name,imgSrc, price, itemId}) {
    const [qty, setQty] = useState(1);
    const [{cart}, dispatch] = useStateValue()
const[itemPrice, setItemPrice] = useState(parseInt(qty)*parseFloat(price))
    useEffect(()=>{
        cartItem=cart;
        setItemPrice(parseInt(qty)*parseFloat(price))
    },[qty])

    const updateQuantity =(action, id)=>{
        if(action=="add"){
            setQty(qty+1)
        }else{
            if(qty==1){
                cartItem.pop(id)
                dispatch({
                    type: actionType.SET_CART,
                    cart: cartItem,
                })
            }
            setQty(qty-1)
            }
        }

    return (
    <div className="cardItem">
    <div className="imgBox">
    <img className='itemImage' src={imgSrc} alt="" />
    </div>
    <div className="itemSection">
        <h2 className="itemName">{name}
        </h2>
        <div className="itemQuantity">
            <span>x{qty}</span>
            <div className="quantity">
                <RemoveRounded className="itemRemove" onClick={()=>updateQuantity("remove", itemId)} />

                <AddRounded className='itemAdd' onClick={()=>updateQuantity("add", itemId)} />
            </div>
        </div>
    </div>
    <p className="itemPrice">
<span className='dolorSign'>
    $
</span>
<span className='itemPriceValue'>{itemPrice}</span>
    </p>
    </div>
  )
}

export default CartItem