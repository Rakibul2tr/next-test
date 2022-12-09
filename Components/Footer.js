import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-dark'>
        <div className='container'>
            <div className='row text-white text-center pt-3'>
                <div className='col-md-4'>
                    <h5>About Us</h5>
                    <p className="text-start">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                   
                </div>
                <div className='col-md-4'>
                    <div className='w-50 m-auto'>
                        <h5>Categorys</h5>
                        <Link href="/"className="nav-link text-white">HTML</Link>
                        <Link href="/"className="nav-link text-white">JavaScript</Link>
                        <Link href="/"className="nav-link text-white">CSS</Link>
                        <Link href="/"className="nav-link text-white">REACT</Link>
                    </div>
                </div>
                <div className='col-md-4'>
                     <h5>Menu Us</h5>
                    <Link href="/"className="nav-link text-white">Home</Link>
                    <Link href="/"className="nav-link text-white">About</Link>
                    <Link href="/"className="nav-link text-white">Service</Link>
                    <Link href="/"className="nav-link text-white">Contact</Link>
                </div>
            </div>
            <div className='row'>
                <p className='text-center text-secondary fw-bold border-top border-secondary m-0 py-1'>CopyWrite By Rakibul Islam 2022</p>
            </div>
        </div>
    </footer>
  )
}
