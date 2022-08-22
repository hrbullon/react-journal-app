import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { JournalScreen } from '../components/journal/JournalScreen';

import { AuthRoutes } from './routes/AuthRoutes';
import { JournalRoutes } from './routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Router>
        <Routes> 
            <Route path="/auth" element={ <AuthRoutes/> }>
                <Route exact path="login" element={ <LoginScreen/> } />
                <Route exact path="register" element={ <RegisterScreen/> } />
            </Route>
            <Route path="/" element={ <JournalRoutes /> }>
                <Route exact path="/" element={ <JournalScreen/> } />
                <Route path="*" element={ <RegisterScreen/> }/> 
            </Route> 
        </Routes>
    </Router>
  )
}
