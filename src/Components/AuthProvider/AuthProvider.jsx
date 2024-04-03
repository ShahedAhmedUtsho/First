import { createContext ,useEffect,useState } from "react";
import auth from "../../Firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types'
export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {


const [user,setUser] = useState(null);



const signUp = (email,password) =>{
  return  createUserWithEmailAndPassword(auth,email,password)
    
    
}
const LogIn = (email,password) => {
   return signInWithEmailAndPassword(auth,email,password)
   
}

const logOut = () =>{
    return signOut(auth)
}

useEffect(()=>{
    const Unsubscribe =onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        console.log(currentUser)
        console.log("loading User",currentUser)
    })
    
    return () => Unsubscribe()
},[])
















const AuthValue = {user,signUp,LogIn,setUser,logOut}
   
    return (
        <>
        <AuthContext.Provider value={AuthValue}>
        {children}
        </AuthContext.Provider>
       
        </>
    )
};

AuthProvider.propTypes ={
    children : PropTypes.node
}
export default AuthProvider;