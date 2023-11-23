import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {

const navigate = useNavigate();
const ChangeHandler=()=>{
    navigate('/')
}
  return (
    <>
    <div>Login Successfully</div>
    <button onClick={ChangeHandler} >Back to Home</button>
    </>
  )
}

export default Success;