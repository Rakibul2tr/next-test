import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { UseContext } from '../../Components/ContextApi/UseContext';
import Navbar from '../../Components/Navbar';
import styles from '../../styles/Home.module.css'

const Products = () => {  
  const {productData}=UseContext();

  
    const [cart,setCart]=useState([])
    // useEffect(()=>{
        
    //     let getDb=JSON.parse(localStorage.getItem('cart'))
    //     setCart(getDb)
        
    // },[])
   //add to cart product
    const addToCartHendal=(item)=>{
        const newCart=[...cart,item]
        setCart(newCart)
        
    }
    
    //total price get
    let total=0;
    for(let priceProduct of cart){
        total=total+priceProduct.price;
    }
    //get to loacalstorage sillect data
    
    useEffect(()=>{
      localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    //all product renduring
    const allProductList=productData?.map(item=>{
        return(
         <div className='col'key={item.id}>
          <div className="card text-center">
            <div className="card-body">
              <Link href={`/products/${item.id}`}><h5 className="card-title">{item.title}</h5></Link>
              <Link href={`/products/${item.id}`}>
              <Image src={item.thumbnail} width={250}height={200} alt=""/>
              </Link>
               <div className='text-start mt-2'>
                <button type="button" className={`btn btn-outline-danger  mt-2  ${styles.btn_size}`}>
                  <Link href={`/products/${item.id}`}>See Details</Link>
                </button>
                <button type="button" className={`btn btn-outline-dark  mt-2  ${styles.btn_size}`}
                onClick={()=>addToCartHendal(item)}
                >
                Add Cart
                </button>
                <div className='text-start d-flex align-items-center justify-content-around mt-2'>
                    <div className=' border-end '>
                        <p className='m-0'>Price : <span className='text-success'>${item.price}</span></p>
                        <p className='m-0'><small>Brand:${item.brand.slice(0,10)}</small></p>
                    </div>
                    <div>
                        <p className='m-0'>Stock : <span className='text-success'>${item.stock}</span></p>
                        <p className='m-0'><small>Category:${item.category}</small></p>
                    </div>
                </div>
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
            <div className='row row-cols-1 row-cols-md-3 g-3'>
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

export default Products