const URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const cocktail1=()=>{
const[userData,setuserData]=useState([])
const[searching,setsearching]=useState("")
const[loading,setloading]=useState(false)
const[error,seterror]=useState({status:false,msg:''})
 
const fetchUsersData = async(apiURL)=>{
  
  setloading(true)
  seterror({status:false,msg:''})
  try{

const response= await fetch(apiURL);
const {drinks}= await response.json();
setuserData(drinks)
setloading(false)
seterror({status:false,msg:''})
if(!drinks){
 throw new error("data not found")

}
  }

catch(error){

  setloading(false)
  seterror({status:true,msg:error.message||"something went wrong.."})

}

}
useEffect(()=>{

  const correctURL='${URL}${searchterm}'
   
  fetchData(correctURL)

},[searchTerm])

return(

<>

<div className="container">
<div className="Parent">
<input type='text' name='search' placeholder='search' value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)}/>

</div>

<hr />

{loading && !error?.status && <h5>loading....</h5>}
{error?.status && <h5 style={{color:red}}>{error.msg}</h5>}
{}

!loading && !error?.status && <ul>
  {


userData.map((eachDrink)=>{

  const{strDrinkThumb,strDrink,idDrink}=eachDrink;

  return<li key={idDrink}>
    <div className='image'>  <img src={strDrinkThumb} alt="" /></div>
    <div className='brandname'>{strDrink}</div>
    </li>
})
}
</ul>


</div>
</>


export default cocktail1;
