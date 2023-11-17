const Watch=()=>{

    const[startTime, setStartTime]=useState(null)
    const[now,setNow]=useState(null)
    const intervalRef=useRef(null)
  
    function handlestart(){
      
      setStartTime(Date.now())
      setNow(Date.now())
      clearInterval(intervalRef.current)
      intervalRef.current=setInterval(()=>{
      setStartTime(Date.now())
  
  },10)
    }
  
    function stopTime(){
  
      clearInterval(intervalRef.current)
    }
  
    let secondsPassed =0;
    if(startTime !== null && now!==null){
      
      secondsPassed=(startTime-now)/1000
  
  }
  
  return(
    <>
    <h4>{secondsPassed.toFixed(3)}</h4>
    <button onClick={handlestart}>startTime</button>
    <button onClick={stopTime}>stopTime</button>
    <h1>hello Welcome</h1>
    
    </>
  
  )
  }
  export default Watch;
  
  
  
  
  