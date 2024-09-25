import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { BsCartCheck } from "react-icons/bs";
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("Home");
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
      <div className="navbar-right">
      <ul className="navbar-menu">
        <Link to='/' className={menu==="Home"?"active":""} onClick={() => {setMenu("Home")}}>Home</Link>
        <a href="#footer" className={menu==="Contact us"?"active":""} onClick={() => {setMenu("Contact us")}}>Contact us</a>
      </ul>
      
        <div className="navbar_search_icon">
        <Link to='/cart'><BsCartCheck /></Link>
          <div className={getTotalCartAmount()=== 0 ? "":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>:
        <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className='dropdown'>
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
          </div>}
        
      </div>
    </div>
  )
}

export default Navbar;