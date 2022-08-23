import React, { useEffect, useState } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import { useDispatch } from "react-redux";

import { firebase } from "../firebase/firebase-config";

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { JournalScreen } from '../components/journal/JournalScreen';

import { AuthRoutes } from './routes/AuthRoutes';
import { JournalRoutes } from './routes/JournalRoutes';
import { login } from '../actions/auth';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const [ checking, setChecking ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged( user => {
        if(user?.uid){
          dispatch( login(user.uid, user.displayName) );
          setIsLoggedIn(true);
        }else{
          setIsLoggedIn(false);
        }

        setChecking(false);
    });

  }, [dispatch, setIsLoggedIn, setChecking]);

  if(checking){
    return <h1>Espere...</h1>
  }
  
  return (
    <Router>
        <Routes> 
            <Route path="/auth" element={ !isLoggedIn ? (<AuthRoutes/>) :( <Navigate to="/"/>) }>
                <Route exact path="login" element={ <LoginScreen/> } />
                <Route exact path="register" element={ <RegisterScreen/> } />
            </Route>
            <Route path="/"  element={ isLoggedIn ? (<JournalRoutes />) :( <Navigate to="/auth/login"/>)}>
                <Route exact path="/" element={ <JournalScreen/> } />
                <Route path="*" element={ <RegisterScreen/> }/> 
            </Route> 
        </Routes>
    </Router>
  )
}