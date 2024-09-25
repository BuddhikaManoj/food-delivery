import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="admin">
            <img className="logo" src={assets.logo} alt="" />
            <p>Admin</p>
            </div>
            
            <img className="profile" src={assets.profile_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar