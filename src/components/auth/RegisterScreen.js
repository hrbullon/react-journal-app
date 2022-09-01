import React, { Fragment } from 'react';
import validator from 'validator';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { startRegisterWithEmailPassword } from '../../actions/auth';

import { setError, removeError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );

  const [ formValues, handleInputChange ] = useForm({
    name:"Haderson Bullon",
    email:"hbullon@gruposerex.com",
    password:"123456",
    password_confirm:"123456"
  })

  const {email, name, password, password_confirm} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    
    if(isFormValided()){
      dispatch( startRegisterWithEmailPassword(email, password, name) );
    }
  }

  const isFormValided = () => {

    if(name.trim().length === 0){
      dispatch( setError("Name is required") )
      return false;
    } else if ( !validator.isEmail( email ) ) {
      dispatch( setError("Email is not valid") )
      return false;
    } else if (password !== password_confirm || password.length > 6){
      dispatch( setError("Password is not correct") )
      return false;
    }

    dispatch( removeError() );

    return true;
  }

  return (
    <Fragment>
    <h3 className='auth__title'>Register</h3>
      
      <form 
        onSubmit={ handleRegister }
        className="animate__animated animate__fadeIn animate_faster"
      >

        {
          msgError && 
          (<div className='auth__alert-error'>
              { msgError }
           </div>)
        }   

        <input
          type="text"
          placeholder="name"
          name="name"
          className='auth__input'
          autocomplete='off'
          value={ name }
          onChange={ handleInputChange }
        />

        <input
          type="text"
          placeholder="email"
          name="email"
          className='auth__input'
          autocomplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
        
        <input
          type="password"
          placeholder="password"
          name="password"
          className='auth__input'
          autoComplete='off'
          value={ password }
          onChange={ handleInputChange }
        />
        
        <input
          type="password_confirm"
          placeholder="confirm"
          name="confirm"
          className='auth__input'
          autoComplete='off'
          value={ password_confirm }
          onChange={ handleInputChange }
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
