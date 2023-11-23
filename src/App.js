
import { Route,Routes } from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import About from "./About";
import PageNotFound from './PageNotFound';
import Success from './Success';
import Restuarents from "./Restuarents";
// import NewRestuarents from './NewRestuarents';
import ExistingRestuarents from "./existingRestuarents";
import Products from './Products';

import Productsview from './Productsview';
import ProductsData from './ProductsData';



function App(){
  return(
    <div className='container'>
      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/Contact' element={<Contact/>}>Contact</Route>
        <Route path='/Service' element={<Service/>}>Service</Route>
        <Route path='/About' element={<About/>}>About</Route>
        <Route path='/Success' element={<Success/>}></Route>
        <Route path='/Restuarents' element={<Restuarents/>}>
          <Route index element={<ExistingRestuarents/>}/>
           <Route path='existingRestuarents' element={<existingRestuarents/>}/>
           <Route path='newRestuarents' element={<newRestuarents/>}/>
        </Route>
        <Route path='/Products' element={<Products/>}/>
           <Route path='/Products/:id' element={<Productsview/>}/>
        

     </Routes>

</div>


  )
}
export default App;



// const App = () => {

//   const[count,setCount]=useState[0]
//   const increment=()=>{
//     setCount(count+1)

//     console.log(count)
//   }
//   return (
    
//     <div>
//     <center>
//       {count}<br></br>

//     <button onClick={increment} >UPDATE</button>
//     </center>
    
    
    
    
    
//     </div>
//   )
// }

// export default App

//useCallback//
// import { useState ,useCallback} from 'react';
// import Count from './count'
// import Button from './Button'


// function App(){
 
//   const[age,setAge]=useState(0)
//   const[salary,setSalary]=useState(7000)

//   const increamentAge=useCallback(()=>{
   
//     setAge(age+1)

//     },[age])
    
//    const increamentsalary=useCallback(()=>{
//      setSalary(salary+1000)
//     },[salary])


//     return(

//       <div className='container'>
//         <center>
//        <Count text={"age"} number={age} />
//        <Button clickHandler={increamentAge}>increamentAge</Button>
//        <Count text={"salary"} number={salary} />
//        </center>
      

//        </div>


// )


// }

// export default App;



//factorial//
// const App=()=>{

//   const[count,setCount]=useState(0)
//   const[number,setNumber]=useState(5)
//   const factorial=React.useMemo(()=>fact(number),[number])
//   const handleChange=()=>{
//   setCount(count+1)

//   }
// return(
  
//   <>
//   {factorial}
//   <button onClick={handleChange}>share</button>
//   {count}
  
//   </>

// )

// }

// const fact=(n)=>{

//   let answer=1;
//   for(var i=n;i>=1;i--){
//    answer=answer*i

//   }

//   console.log("FACTORIAL CALLED")
//   return answer

// }
// export default App





  
        
        
  
  
  




//useRef//
// import React,{useState,useRef} from 'react';


// const Watch=()=>{

//   const[startTime, setStartTime]=useState(null)
//   const[now,setNow]=useState(null)
//   const intervalRef=useRef(null)

//   function handlestart(){
    
//     setStartTime(Date.now())
//     setNow(Date.now())
//     clearInterval(intervalRef.current)
//     intervalRef.current=setInterval(()=>{
//      setStartTime(Date.now())

// },10)
//   }

//   function stopTime(){

//     clearInterval(intervalRef.current)
//   }

//   let secondsPassed =0;
//   if(startTime !== null && now!==null){
    
//     secondsPassed=(startTime-now)/1000

// }

// return(
//   <>
//   <h4>{secondsPassed.toFixed(3)}</h4>
//   <button onClick={handlestart}>startTime</button>
//   <button onClick={stopTime}>stopTime</button>
//   <h1>hello Welcome</h1>
  
//   </>

// )
// }
// export default Watch;





  





//======>useRef

// function App(){
//   let ref=useRef(0)

// function handleclick(){

// ref.current=ref.current+1
// alert("clicked"+ref.current+"times!")
// }

// return(

//   <div className='container'>

//     <button onClick={handleclick}>Share the post</button>
    
    
//     </div>

// )
// }

// export default App;





//=====>//useReducer//

// import React,{useReducer} from 'react';


// const intialisation ={count:0}

//   function reducer(state,action){
//   switch(action.type){

//     case 'increment'  :
//       return{count : state.count+1}
//      case 'decrement' :
//       return{count : state.count-1}
//       default :
//       throw new Error()  
//     }


//   }
//   function App(){

//     const [state,dispatch]= useReducer(reducer,intialisation)

//     return(

//       <div className='container'>

//         count : {state.count}

//         <button onClick={()=>dispatch({type :'decrement'})}>-</button>
//         <button onClick={()=>dispatch({type :'increment'})}>+</button>

//         </div>

// )

// }

// export default App;



// function App(){

//   const[data,setdata]=useState(10)
//   const changeHandler=()=>{
//     setdata(data-1)
//   }
//   const increaseHandler=()=>{
//     setdata(data+1)
//   }
//   return(

//       <div className='container'>
//       <button onClick={changeHandler}>-</button>
//       <span>{data}</span>
//       <button onClick={increaseHandler}>+</button>
  
//   </div>
  
//   )
  
//   }
//   export default App;
  


  // var restaurantdata = [
//   { 
//     image1:"https://tse2.mm.bing.net/th?id=OIP.gKhl0C3jNy1Ro5CA7VZHogHaE6&pid=Api&P=0&h=180",
// restuarentname:"paradise",
// cusines:"Cusines:Italian,chainese,indian",
// rating:"5 star",
// id:10
// },
// {
// image1:"https://static.giggster.com/images/location/78dea6a0-6007-416c-bc19-a568454ebc05/a03a786f-c167-40cc-b05c-36797b963620/full_hd_retina.jpeg",
// restuarentname:"kritunga",
// cusines:"Cusines:Italian,chainese,indian",
// rating:"3 star",
// id:20
// },
// {
//  image1:"//mgmgrand.mgmresorts.com/content/dam/MGM/mgm-grand/dining/mgm-grand-buffet/architecture/mgm-grand-restaurant-buffet-interior-01@2x.jpg",
//  restuarentname:"alpha",
//  cusines:"Cusines:Italian,chainese,indian",
//  rating:"4 star",
//  id:30
// },
// {
//     image1:"https://handluggageonly.co.uk/wp-content/uploads/2015/10/dinner-cover-2-en.jpg",
//     restuarentname:"kfc",
//     cusines:"Cusines:Italian,chainese,indian",
//     rating:"4 star",
//     id:40
//  }
// ]


// function App() {
  
// //   let person={
// //     name :"hello",
// //     place:"Navya"

// const[data, setData]= useState(restaurantdata)
// const deleteHandler=(recieveid)=>{
// console.log(recieveid)
// const filterData=data.filter((eachObj)=>{

// return eachObj.id != recieveid

//  })
//  setData(filterData)
// }

// return (

  
  
//    <div className='container'>
//     <ul>
//     {
//     data.map((eachObj)=>{

//     const {image1,restuarentname,cusines,rating,id}=eachObj
    
      
//     return (



//       <li key={id}>
//       <div><img src={image1} alt=""/></div>
//       <div>{restuarentname}</div>
//       <div>{cusines}</div>
//       <div>{rating}</div>
//       <button onClick={()=>deleteHandler(id)}>Delete</button>
//       </li>
//     )
//     }
//     )
//   }
    
//     </ul>
//     </div>
// )
// }
// export default App;

      
      




    // <Restuarent image1={image1} restuarentname={restuarentname} cusines={cusines} rating={rating}/>

    /* <Restuarent image1={data[0].image1} restuarentname={data[0].restuarentname} cusines={data[0].cusines} rating={data[0].rating}/>
    <Restuarent image1={data[1].image1} restuarentname={data[1].restuarentname} cusines={data[1].cusines} rating={data[1].rating}/>
    <Restuarent image1={data[2].image1} restuarentname={data[2].restuarentname} cusines={data[2].cusines} rating={data[2].rating}/>
    <Restuarent image1={data[3].image1} restuarentname={data[3].restuarentname} cusines={data[3].cusines} rating={data[3].rating}/> */

     
  



//  const Image=() =>{

// return(
//   <div className='container'>
//   <img src="https://tse4.mm.bing.net/th?id=OIP.MXXcVA3-a55KwAUXCG5HAAHaE8&pid=Api&P=0&h=180" ></img>
  
//   </div>
// )
// }


// const Restuarent=(props)=>{

//   return(
//      <>
//     <img src={props.image1} alt="Restuarent"/>
//     <h2>{props.restuarentname}</h2>
//     <h3>{props.cusines}</h3>
//     <h4>{props.rating}</h4>
//     </>

// )
   
//
// function App(){

//   const URL='https://jsonplaceholder.typicode.com/users'
  

//   const [usersData, setUsersData]=useState([])

//   const fetchUsersData = async(apiURL)=>{

//     const response= await fetch(apiURL)
//     const data = await response.json()
//     setUsersData(data)

// }
// useEffect(()=>{

//   fetchUsersData(URL)

// },[])

// return (

  
  
//      <div className='container'>
//       <ul>
//       {
//       usersData.map((oneObj)=>{
  
//       const {name,username,email,phone}=oneObj
      
        
//       return (
  
        
//       <li key="id">
//         <div>{name}</div>
//         <div>{username}</div>
//         <div>{email}</div>
//         <div>{phone}</div>
        
//         </li>
//       )
//       }
//       )
//     }
      
//       </ul>
//       </div>
//   )
//   }

//get//
//put//
//post//
//delete//
//patch//


