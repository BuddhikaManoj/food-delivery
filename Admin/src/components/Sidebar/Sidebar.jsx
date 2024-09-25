import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { CiCirclePlus } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { BiCalendarCheck } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
            <CiCirclePlus />
                <p>Add Item</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
            <CiViewList />
                <p>List Item</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
            <BiCalendarCheck />
                <p>Orders Item</p>
            </NavLink>
        </div>

    </div>
  )
}

export default Sidebar