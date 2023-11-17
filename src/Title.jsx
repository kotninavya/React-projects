import logo from './logo.svg';
import './App.css';

let image1="https://tse2.mm.bing.net/th?id=OIP.gKhl0C3jNy1Ro5CA7VZHogHaE6&pid=Api&P=0&h=180";
let restuarentname="paradise";
let cusines="Cusines:Italian,chainese,indian";
let rating="5 star"

function App() {



}
const Restuarent = ()=>{

    return(
        <>
  
      <img src={image1} alt="Restuarent"/>
      <h2>{restuarentname}</h2>
      <h3>{cusines}</h3>
      <h4>{rating}</h4>
      </>
  
)
    }  