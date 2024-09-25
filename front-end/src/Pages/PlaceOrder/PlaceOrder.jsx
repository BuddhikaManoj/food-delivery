import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext);
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    phone:""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}));
  }

  const placeOrder = async(event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let OrderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }        
    let response = await axios.post(url+"/api/order/place",OrderData,{headers:{token}});    
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error");
      console.log(response.data);
      
    }

  }

const navigate = useNavigate();

  useEffect(()=> {
    if(!token){
        navigate('/cart')
    }
    else if (getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[token])

  return (
    <form className='place-order' onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className='title'>Delivery Details</p>
        <div className="multi-fields">
          <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder='first name' />
          <input required name="lastName" onChange={onChangeHandler} value={data.lastName}  type="text" placeholder='last name' />
        </div>
          <input required name="email" onChange={onChangeHandler} value={data.email}  type="email" placeholder='Email' />
          <input required name="street" onChange={onChangeHandler} value={data.street}  type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
          <input required name="state" onChange={onChangeHandler} value={data.state}  type="text" placeholder='State' />
        </div>
        <input required name="phone" onChange={onChangeHandler} value={data.phone}  type="text" placeholder='Phone' />

      </div>
      <div className="place-order-right">
      <div className="total">
        <h2>Cart Total</h2>
        <div className="total-details">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr/>
        <div className="total-details">
          <p>Delivery fee</p>
          <p>${2}</p>
        </div>
        <hr/>
        <div className="total-details">
        <p>Total</p>
        <p>${getTotalCartAmount()+2}</p>
        </div>
        <button type='submit'>Proceed to payment</button>
      </div>
      </div>
    </form>
  )
}

export default PlaceOrder