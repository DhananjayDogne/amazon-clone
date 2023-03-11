import React,{useState} from "react";
import "./Login.css";
import {Link,useNavigate} from "react-router-dom";
import { auth } from "./firebase";
function Login(){

    const navigate=useNavigate();

   const [email, setEmail]=useState('');
   const [password,setPassword] = useState('');
   const Signin=e=>{
       e.preventDefault();
       auth.signInWithEmailAndPassword(email,password)
       .then(auth=>{
        navigate('/')
       })
       .catch(error=>alert(error.message))
       
   }
   const register=e=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
        // console.log(auth)
        if(auth){
            navigate('/')
        }

    })
    .catch(error=>alert(error.message))
   }
   return(
    <div className="login">
        <Link to='/'>
        <img className="login_logo" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" />
        </Link>

        <div className="login_container">
            <h1>Sign-in</h1>

            <form className="login_form">
                <h5>
                    E-mail
                </h5>
                <input type="email" value={email} 
                onChange={e=>setEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input type="password" value={password}
                onChange={e=>setPassword(e.target.value)}
                />
                <button
                 className="login_sigin_button" 
                 onClick={Signin}
                 type="submit"
                >Sign In</button>
            </form>
            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
                Please see our Privacy Notice, our Cookies Notiece and our Interest-Based
                Ads Notice.
            </p>
            <button 
            className="login_register_button"
            onClick={register}
            >Create your Amazon Account</button>
        </div>
    </div>
   )
}
export default Login;
