import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        
        setTimeout(() => {
            dispatch( login("1213","pedro") );
        }, 3500);
    
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
       
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}