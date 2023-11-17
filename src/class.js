
import React,{usestate} from 'react';


function Class(){

  //usestate//

const[data,setdata]=usestate(10)
const changeHandler=()=>{
  setdata(data-1)
}
const increaseHandler=()=>{
  setdata(data+1)
}
return(

  <div classname='container'>
    <button onclick={changeHandler}>-</button>
    <span>{data}</span>
    <button onclick={increaseHandler}>+</button>

</div>
)
}
export default Class