import React from 'react'
import Navbar from '../../Components/Navbar'

const SingUp = () => {
  return (
    <>
    <Navbar/>
    <div className='w-25 m-auto bg-dark p-5 rounded'>
    <form className='text-center'>
        <div className='text-white text-center'>
            <h4>Please Create Your Account</h4>
        </div>
        <div class="mb-3">
            <label for="html" class="form-label">Your Name</label>
            <input type="text" class="form-control" placeholder='Full Name..'/>
        </div>
        <div class="mb-3">
            <label for="html" class="form-label">Email address</label>
            <input type="email" class="form-control" placeholder='rakibul@gmail.com' />
        </div>
            <div class="mb-3">
                <label for="html" class="form-label">Password</label>
                <input type="password" class="form-control" />
            </div>
            <button type="submit" class="btn btn-light">Create</button>
        </form>
    </div>
  </>
  )
}

export default SingUp