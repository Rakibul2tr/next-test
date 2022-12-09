import React, { createContext, useContext, useEffect, useState } from 'react'


const MY_CONTEXT=createContext()
function ContextProvider({children}) {
    const [datas,setData]=useState([])
    const [laptop,setLaptop]=useState([])
    const [productData,setProductsData]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/categories`)
        .then((res)=>res.json())
        .then((data)=>setData(data));

        fetch(`https://dummyjson.com/products/category/smartphones`)
         .then(res=>res.json())
         .then(data=>setLaptop(data.products));

       fetch(`https://dummyjson.com/products`)
        .then((res)=>res.json())
        .then((data)=>setProductsData(data.products));

    },[])
    
    const value={
        datas,
        laptop,
        productData,
    }
  return (
    <MY_CONTEXT.Provider value={value}>
        {children}
    </MY_CONTEXT.Provider>
  )
}
export const UseContext=()=>{
    const context=useContext(MY_CONTEXT)
    return context;
}
export default ContextProvider