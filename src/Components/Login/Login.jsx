import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.init";


const Login = () => {

const {LogIn,setUser} = useContext(AuthContext)


const [error,setError] = useState("")
const [success,setSuccess] = useState("") 

const googleProvider = new GoogleAuthProvider()

const googleLogIn = () =>{
    setSuccess("")
    setError("")

   signInWithPopup(auth,googleProvider)
   .then(res =>{
    const user = res.user
    setUser(user)
    setSuccess("login successful")
   })
   .catch(error => {
    setError(error.message)
   })

}



    const handleLogin = e =>{
        e.preventDefault()
        
        const email = e.target.email.value ;
        
        const password =e.target.password.value;
       
    
        console.log(email,password)
        LogIn(email,password)
        .then(res =>{
            const user = res.user
            setUser(user)
            setSuccess("login successful")
        })
        .catch(error =>{
            
            setError(error.message)
        })
      
    }











    return (
        <div>
           <form onSubmit={handleLogin} className="max-w-[450px]  mx-auto  *:mb-5">
          
            <div>
                <p>Email</p>
                <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            <div>
                <p>Password</p>
                <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            
            <div className="mt-16">
            {
                error ?   <p className=" text-red-600  absolute -top-12">{error}</p> : <p className=" text-green-600  absolute -top-12">{success}</p>
              }
                <button  type='submit' className="btn btn-primary">Login</button>
                <button onClick={googleLogIn} className="btn  btn-ghost bg-blue-500 ml-5 text-black">Google Login</button>
            </div>
          
           </form>
          
        </div>
    );
};

export default Login;