import React, { useRef, useState } from "react";
import Header from "./Header";
import {validationForm} from '../utils/validateForm'
import { createUserWithEmailAndPassword } from "firebase/auth";
import  {auth} from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handelSubmitbutton = function () {
   
    console.log(email.current.value)
    console.log(password.current.value)
    console.log(name.current.value);

    const message = validationForm(name.current.value, email.current.value, password.current.value)
    setErrorMessage(message)

    if(!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
          console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage (`${errorCode} - ${errorMessage}`)
      });
    
    }

  } 

  const signInToggle = () => {

   isSignIn ? setIsSignIn(!isSignIn) : setIsSignIn(isSignIn) ;
    console.log(!isSignIn);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo1"></img>
      </div>
      <div className="flex flex-wrap justify-center items-center min-h-screen ">
        <form  onSubmit={(e)=>e.preventDefault()} 
        className="py-20 px-12 w-1/5 h-3/4 relative  
         bg-black rounded bg-opacity-85">
          <h2 className="text-white font-semibold p-1 m-1 text-3xl">
            {isSignIn ? "Sign In" : "Sign up"}
          </h2>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-2 my-2 bg-gray-700 text-white h-12 rounded w-full"></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 bg-gray-700 text-white h-12 rounded w-full"></input>
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 bg-gray-700 text-white h-12 rounded w-full"></input>
          {!isSignIn && (
            <input
              type="password"
              placeholder="Re-Enter Password"
              className="p-2 my-2 bg-gray-700 text-white h-12 rounded w-full"></input>
          )}
          <p className="text-red-700" >{errorMessage}</p>
          <button
            type="submit"
            className="p-2 my-6 items-center bg-red-700 text-white rounded w-full" onClick={handelSubmitbutton} >
            {isSignIn ? "Sign In" : "Sign up"}
          </button>

          <input type="checkbox" id="myCheckbox" className="w-4 h-4" />
          <label htmlFor="myCheckbox" className="text-white py-2 mx-2" >Remember me</label>
         
          <p
            onClick={signInToggle}
            className="py-2 my-2 text-white hover:text-gray-400 cursor-pointer">
            {isSignIn
              ? "New to Netflix? Sign up now."
              : "Already Logged In? Sign In now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
