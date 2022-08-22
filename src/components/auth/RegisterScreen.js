import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <Fragment>
    <h3 className='auth__title'>Login</h3>
      
      <form>

        <input
          type="text"
          placeholder="Name"
          name="name"
          className='auth__input'
          autocomplete='off'
        />

        <input
          type="text"
          placeholder="email"
          name="email"
          className='auth__input'
          autocomplete='off'
        />
        
        <input
          type="password"
          placeholder="password"
          name="password"
          className='auth__input'
          autoComplete='off'
        />
        
        <input
          type="password"
          placeholder="Confirm"
          name="confirm"
          className='auth__input'
          autoComplete='off'
        />

        <button 
          type='submit'
          className='btn btn-primary btn-block mb-5'
        >
          Register
        </button>  


        <Link 
          to="/auth/login"
          className='link'>
          Already have an account
        </Link>
      
      </form>

    </Fragment>
  )
}
