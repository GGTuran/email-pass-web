import { createContext } from "react";
import PropTypes from 'prop-types'; 
import { useSubmit } from "react-router-dom";
import auth from "../Firebase/firebase.config";
import {  createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useSubmit(null);

    const creatUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password);
    }



    const authInfo = { user, creatUser } 



    return (
        <AuthContext.Provider value={authInfo} > {children} </AuthContext.Provider>

    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children:PropTypes.node
}
