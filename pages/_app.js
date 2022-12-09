import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import '../styles/globals.css'
import ContextProvider from'../Components/ContextApi/UseContext'
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  },[])
  return <ContextProvider>
    <Component {...pageProps} />
    <Footer/>
  </ContextProvider>
}

export default MyApp
