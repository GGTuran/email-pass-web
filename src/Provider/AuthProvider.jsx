/* eslint-disable no-unused-vars */
// import { createContext } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types'; 
// import { useSubmit } from "react-router-dom";
// import auth from "../Firebase/firebase.config";
// import {  createUserWithEmailAndPassword } from "firebase/auth";
// export const AuthContext = createContext(null);

import { createContext, useState } from "react";
import auth from '../Firebase/firebase.config';

// const AuthProvider = ({children}) => {

//     const [user, setUser] = useSubmit(null);

//     const creatUser = (email, password) =>{
//         return createUserWithEmailAndPassword (auth, email, password);
//     }



//     const authInfo = { user, creatUser } 



//     return (
//         <AuthContext.Provider value={authInfo} > {children} </AuthContext.Provider>

//     );
// };

// export default AuthProvider;
// AuthProvider.propTypes = {
//     children:PropTypes.node
// }



const AuthContext = createContext(null);




const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password );
    }
    const authInfo = {user, createUser}
    return (
        <AuthContext.Provider value={authInfo}> 

        {children}

        </AuthContext.Provider>
        
    );
};

export default AuthProvider;




AuthProvider.propTypes = {
    children:PropTypes.node
}