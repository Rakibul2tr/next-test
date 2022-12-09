import React from 'react'
import Navbar from '../../Components/Navbar'

const Login = () => {
  return (
  <>
  <Navbar/>
  <div className='w-25 m-auto bg-dark p-5 rounded'>
  <form className='text-center'>
        <div className='text-white text-center'>
            <h4>Please Login Our WebSite</h4>
        </div>
        <div class="mb-3">
            <label for="html" class="form-label">Email address</label>
            <input type="email" class="form-control" placeholder='rakibul@gmail.com' />
        </div>
            <div class="mb-3">
                <label for="html" class="form-label">Password</label>
                <input type="password" class="form-control" />
            </div>
            <button type="submit" class="btn btn-light">Login</button>
        </form>
  </div>
  </>
    
  )
}

export default Login