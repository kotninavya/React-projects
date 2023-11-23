import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar=()=>{

    return(

        <div>
            <nav>
                <ul>

         <li> <NavLink to='/'>Home</NavLink></li>
         <li>  <NavLink to='/Contact'>contact</NavLink></li>
         <li>  <NavLink to='/Service'>service</NavLink></li>
         <li>  <NavLink to='/About'>about</NavLink></li>
         <li> <NavLink to='/Restuarents'>Restuarents</NavLink></li>
         <li><NavLink to='/Products'>Products</NavLink></li>
           
           </ul>

            </nav>

        </div>


)
}
export default Navbar;