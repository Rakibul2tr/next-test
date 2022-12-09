
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { UseContext } from '../../Components/ContextApi/UseContext'
import Star from '../../Components/Star'
import styles from '../../styles/Home.module.css'

const Category = () => {
  const {datas,laptop}=UseContext();
  const [catDatas,setCatDatas]=useState([])
   
    const categoryHendl=(id)=>{
      fetch(`https://dummyjson.com/products/category/${id}`)
      .then(res=>res.json())
      .then(data=>setCatDatas(data))
      
    }
    
  return (
  <>
  <div className='col-md-2'>
  <ul className="navbar-nav bg-light">
        {
        datas.map((item,index)=><li onClick={()=>categoryHendl(item)} className={`${styles.customItem} nav-item`} key={index}>
            {item}
        </li>)
        }
    </ul>
  </div>
   <div className='col-md-10 bg-white'>

      <div className='row ms-3'>
        {
          catDatas?.products==undefined?<>{
            laptop?.map((category)=><div key={category.id} className='col-md-3 mb-3'>
            <div className={`${styles.cardItem} card`}>
            <Image src={category.thumbnail} width={200}height={100} alt='' className='w-100 h-100'/>
              <div className={`${styles.cardTitle} position-absolute  w-100 h-50`}>
                <h6 className='mb-0 text-capitalize'>{category.title}</h6>
                <Star rating={category?.rating}/>
                <p className='mb-0 fw-bold'>Price : BDT {category.price}</p>
                <p className='mb-1 fw-bold'>In Stock : {category.stock} Pice</p>
                <button type='button' className='btn btn-light btn-sm ms-2'>
                  <Link href={`/categorys/${category.id}`}>See Details</Link>
                </button>
              </div>
            </div>
          </div>)
          }</>:
          <>
           {
          catDatas?.products?.map((category)=><div key={category.id} className='col-md-3 mb-3'>
            <div className={`${styles.cardItem} card`}>
            <Image src={category.thumbnail} width={200}height={100} alt='' className='w-100 h-100'/>
              <div className={`${styles.cardTitle} position-absolute  w-100 h-50`}>
                <h6 className='mb-0 text-capitalize'>{category.title}</h6>
                <Star rating={category?.rating}/>
                <p className='mb-0 fw-bold'>Price : BDT {category.price}</p>
                <p className='mb-1 fw-bold'>In Stock : {category.stock} Pice</p>
                <button type='button' className='btn btn-light btn-sm ms-2'>
                  <Link href={`/categorys/${category.id}`}>See Details</Link>
                </button>
              </div>
            </div>
          </div>)
           }
          </>
        }
      </div>
    </div>
    
  </>    
  )
}

export default Category;


