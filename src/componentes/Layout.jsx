


import React from "react";
import { NavLink, Outlet,  } from "react-router-dom";

const Layout = () => {
    return(

    <nav className=" div">
    <div className=" "> 
    
        <a href="/" className="a"><NavLink to='/' className={({isActive}) => (isActive ? 'link active' : 'link')}  ><span>Home</span> <i></i> </NavLink></a>
        <a href="/formulario" className="a"><NavLink to='/formulario' className={({isActive}) => (isActive ? 'link active' : 'link')}  ><span>formulario</span> <i></i> </NavLink></a>
        <a href="/about" className="a"><NavLink to='/about' className={({isActive}) => (isActive ? 'link active' : 'link')}  ><span>api</span> <i></i> </NavLink></a>
       
  

         <Outlet />
         </div>    
    </nav>
    
    )
   
   
}


export default Layout;
