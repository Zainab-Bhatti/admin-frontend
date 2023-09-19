import React from "react";
import './sidebar.css';
import { Outlet } from "react-router-dom";
const SideBar = () => {
    return (
      <>
  
<header id="header">
 <div class="menu-button">
  <div id="nav-icon3">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
  </div>
 </div>
 <div id="top-bar">
  <h3>Dashboard</h3>
 </div>
</header>

<nav id="sidemenu">
 <div class="main-menu">
  <ul class='main-menu'>
   <li class="link-active">
   
     <span class='glyphicon glyphicon-home'></span> Products
   
   </li>
   <li>
  
     <span class='glyphicon glyphicon-pushpin'></span> Users
 
   </li>
   <li>
   
     <span class='glyphicon glyphicon-picture'></span> Orders
  
   </li>
   </ul>
   </div>
   </nav>
  
<div id="content-wrapper">
 <div class="container-fluid">
  <Outlet/>
 </div>
</div>
      </>
    )
}

export default SideBar;