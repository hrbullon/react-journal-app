import React from 'react';
import { Outlet } from 'react-router-dom';

export const AuthRoutes = () => {
  return (
    <div className='auth__main'>
      <div className='auth__box-container'>
        <Outlet/>
      </div>
    </div>
  )
}
