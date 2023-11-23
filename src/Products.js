import React from 'react'
import ProductsData from './ProductsData'
import {Link} from 'react-router-dom'

function Products (){
  return (
    <>
    <div className='data'>
    {
   ProductsData.map((eachUser)=>{
    const{name,price,imageURL,id}=eachUser
    return<Link to={`/Products/${id}`}key={id}>
        <div>
         <img src={imageURL} alt="" />
         <h3>Name :{name}</h3>
         <h3>price :{price}</h3>
      </div>
      </Link>

})
}
</div>
    </>
  )
}

export default Products;