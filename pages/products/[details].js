
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { UseContext } from '../../Components/ContextApi/UseContext'
import Navbar from '../../Components/Navbar'

const details = () => {
  const {productData}=UseContext();
    let Route=useRouter()
    let routeId=(Route.query.details);
    const SingleProduct=productData.filter((product)=>{return product.id==routeId})
    console.log(SingleProduct);

  const [url,setUrl]=useState('')
  return (
    <>
    <Navbar/>
    <div className="container mt-3" key={SingleProduct[0]?.id}>
        <Link href={'/products'}>back to all Products</Link>
        <div className="row">
          <div className='col-md-6 text-center'>
          <Image src={url?url:SingleProduct[0]?.thumbnail} width={500}height={400} alt=""/>
            <div className='d-flex justify-content-evenly align-items-center mt-2 bg-light'>
              {
                SingleProduct[0]?.images.map((image,index)=><Image className='rounded border-1 border p-1' key={index} src={image} alt=''width={60} height={40} onClick={()=>setUrl(image)}/>)  
              }
              </div>
          </div>
          <div className='col-md-6'>
          <h5 className="card-title">{SingleProduct[0]?.title}</h5> 
            <p>{SingleProduct[0]?.description}</p>
            <div className='text-start'>
              <h6 className=' fs-6'>Price : <span className='text-success'>${SingleProduct[0]?.price}</span></h6>
              <h6 className='fs-6'>Category : <span className='text-success'>${SingleProduct[0]?.category}</span></h6>
               <p className='m-0'><small>Brand:${SingleProduct[0]?.brand}</small></p>
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default details

// export async function getStaticPaths() {
//   const res = await fetch('https://dummyjson.com/products')
//   const products = await res.json()
//   const paths = products?.products.map((product) => ({
//     params: { details: product.id.toString() },
//   }))
  
//   return { 
//     paths, 
//     fallback: false
//    }
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`https://dummyjson.com/products/${params.details}`)
//   const products = await res.json()

//   return { props: { products:products } }
// }