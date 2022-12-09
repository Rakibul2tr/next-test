import Link from "next/link"
import { useEffect, useState } from "react";
import Styles from"../styles/Home.module.css"

const Navbar = () => {
  const user=true;
  
  
  return (
    <div className={Styles.menu_bar}>
    <nav className="navbar navbar-expand-lg navbar-light container">
        <div className="container-fluid">
         <Link href="/" className="navbar-brand text-white">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto text-white">
                {
                  user?<>
                   <Link href="/"className="nav-link text-white">Home</Link>
                   <Link href="/products"className="nav-link text-white">All Products</Link>
                   <Link href="/cart"className="nav-link text-white">Cart</Link>
                  </>
                  :<>
                  <Link href='/Login/Login' className="nav-link text-white">Login</Link>
                  <Link href='/SingUp/SingUp' className="nav-link text-white">Suing Up</Link>
                  </>
                }
                  
                  
              </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar