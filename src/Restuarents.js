import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Restuarents = () => {
  return (
    <>
    <div>Restuarents</div>
    <nav>
      <ul>

      <li>  <Link to='/Restuarents/existing'>existingRestuarent</Link> </li>
      <li> <Link to='./Restuarents/New'>NewRestuarent</Link> </li>
      
      </ul>
   
    </nav>
    <Outlet />
  
    </>

  )
}

export default Restuarents;