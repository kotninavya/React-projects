
import './App.css';

import React,{useEffect,useState} from 'react';


function Application(){

    const URL='https://jsonplaceholder.typicode.com/users'
    
  
    const [usersData, setUsersData]=useState([])
  
    const fetchUsersData = async(apiURL)=>{
  
      const response= await fetch(apiURL)
      const data = await response.json()
      setUsersData(data)
  
  }
  useEffect(()=>{
  
    fetchUsersData(URL)
  
  },[])
  
  return (
  
      <div className='container'>
        <ul>
        {
        usersData.map((oneObj)=>{
    
        const {name,username,email,phone,id}=oneObj
        
          
        return (
    
          
        <li key={id}>
          <div>{name}</div>
          <div>{username}</div>
          <div>{email}</div>
          <div>{phone}</div>
          
          </li>
        )
        }
        )
      }
        
        </ul>
        </div>
    )
    }
  export default Application;