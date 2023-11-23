import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsData from './ProductsData';

const Productsview = () => {
    const parms= useParams();
    const filterproducts= ProductsData.find((eachUser)=>parms.id == eachUser.id)
    console.log(filterproducts)
  return (
    <>

    <div>Productsview</div>
    <div>
     <h1>{filterproducts.name}</h1>
     <img src={filterproducts.imageURL} alt=""/>
     <h3>{filterproducts.price}</h3>

</div>
    </>
  )
}

export default Productsview;