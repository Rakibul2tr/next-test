import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar';
import Star from '../../Components/Star';

const SingleProduct = () => {
    const [product,setProduct]=useState()
    const [url,setUrl]=useState('')
    let Route=useRouter()
    let routeId=(Route.query.categorypod);
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${routeId}`)
          .then(res=>res.json())
          .then(data=>{
            setProduct(data) 
          })
       },[])
    //    console.log(product);
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className="row pt-3">
                <div className='col-md-10'>
                    <div>
                        <div className=' d-flex align-items-center '>
                            <div className='col-md-6 text-center'>
                            <Image src={url?url:product?.thumbnail} width={430}height={450} alt={product?.title}/>
                            <div className='d-flex justify-content-evenly align-items-center mt-2 bg-light'>
                            {
                              product?.images.map((image,index)=><Image className='rounded border-1 border p-1' key={index} src={image} alt=''width={60} height={40} onClick={()=>setUrl(image)}/>)  
                            }
                            </div>
                            
                            </div>
                            <div className={`col-md-6 `}>
                                <h4 className='mb-0 text-capitalize'>{product?.title}</h4>
                                <p className='mb-0'>{product?.description}</p>
                                <Star rating={product?.rating}/>
                                <p className='mb-0 fw-bold'>Price : BDT {product?.price}</p>
                                <p className='mb-1 fw-bold'>In Stock : {product?.stock} Pice</p>
                                <button type='button' className='btn btn-secondary btn-sm ms-2'>
                                Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-2'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct;

// export async function getStaticPaths() {
    
//     const res = await fetch('https://dummyjson.com/products')
//     const products = await res.json()
//     const paths = products?.products.map((product) => ({
//       params: { categorypod: product.id.toString() },
//     }))
  
//     return { paths, fallback: false }
//   }

// export async function getStaticProps({params}) {
//     console.log(params);
//     const res= await fetch(`https://dummyjson.com/products/${params}`)
//     const data=await res.json()
     
//       return {
//         props: {
//           data:data
//         }, 
//       }
//     }