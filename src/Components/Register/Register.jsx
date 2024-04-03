import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {


const {signUp,setUser} =useContext(AuthContext)


const [error,setError] = useState("")
const [success,setSuccess] = useState("")


    const handleResister = e =>{
        setError("");
        setSuccess("")
        e.preventDefault()

        // const name = e.target.name.value;
        const email = e.target.email.value ;
        // const photo = e.target.photo.value;
        const password =e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;






        if( password !== confirmPassword ){
            console.log("password are not same ")
            setError('password are not same')
            return

        }






        if (!password) {
            setError('Password is required.');
            return;
          }
      
          if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
          }
      
          if (!/\d/.test(password)) {
            setError('Password must contain at least one number.');
            return;
          }
      
          if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one uppercase letter.');
            return;
          }



    
        signUp(email,password)
        .then(res => {
            const currentUser = res.user
          setSuccess("resister successfully")
            setUser(currentUser)
        })
        .catch(err =>{
            setError(err.message)
        })
    }









    return (
        <div>
           <form onSubmit={handleResister} className="max-w-[450px]  mx-auto  *:mb-5">
            <div>
                <p>name</p>
                <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            <div>
                <p>Photo</p>
                <input name="photo" type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            <div>
                <p>Email</p>
                <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            <div>
                <p>Password</p>
                <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            <div>
                <p>confirm password </p>
                <input name="confirmPassword" type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            
            <div className=" mt-16 relative">
              {
                error?   <p className=" text-red-600  absolute -top-12">{error}</p> : <p className=" text-green-600  absolute -top-12">{success}</p>
              }
                <button  type='submit' className="btn btn-primary">Register</button>
           
            </div>

           </form>
        </div>
    );
};

export default Register;