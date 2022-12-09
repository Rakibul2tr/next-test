import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import styles from '../../styles/Home.module.css'

const Cart = () => {
  const [cart,setCart]=useState([])
  useEffect(()=>{
    let a=localStorage.getItem('cart')
    setCart(JSON.parse(a));
    console.log(cart);
  },[])
   //total price get
   let total=0;
   for(let priceProduct of cart){
       total=total+priceProduct.price;
   }

  const allProductList=cart?.map(item=>{
    return(
     <div className="col" key={item.id}>
      <div className="card text-center">
        <div className="d-flex">
          <Image src={item.thumbnail} width={200}height={100} alt=""/>
          
           <div className=' mt-2'>
           <h5 className="card-title">{item.title}</h5>
           <h6 className='m-0 fs-6'>Price : <span className='text-success'>${item.price}</span></h6>
              <p className='m-0'><small>Brand:${item.brand.slice(0,10)}</small></p>
          </div>
        </div>
      </div>
    </div>
    )
  })
  return (
    <>
    <Navbar/>
    <div className='container pt-2'>
        <div className="row" >
        <div className='col-md-10'>
            <div className='row row-cols-1 row-cols-md-2 g-3'>
            {allProductList}
            </div>
        </div>
         
         <div className='col-md-2 '>
            <div className={`${styles.cartCoulam}`}>
                <div className='fw-bolder text-center mb-3'>Cart <span className='bg-success px-2 py-1 rounded text-white'>{cart?.length}</span></div>
                {
                cart?.map((item)=><div className='d-flex justify-content-between' key={item.id}>
                    <Image src={item.thumbnail} width={30} height={25} alt=""/>
                    <h6> $ {item.price}</h6>
                </div>)
                }
                <hr className='mb-1 text-center'/>
                <p className='text-end fw-bold bg-warning pe-2 '>Total : ${total}</p>
                <Link href={`/cart`}>Order Now</Link>
            </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Cart