import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header></Header>
        <div className='absolute'>
            <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt='logo1'>
            </img>
        </div>
        <div className='flex flex-wrap justify-center items-center min-h-screen '>
          <form className= 'py-20 px-12 w-1/5 h-3/4 relative   bg-black rounded bg-opacity-85'>
          <h2 className='text-white font-semibold p-1 m-1 text-3xl'>Sign In</h2>
            <input type="text"  placeholder='Email Address' className="p-2 my-2 bg-gray-700 text-white h-12 rounded w-full"></input>
            <input type="password"  placeholder="Password" className="p-2 my-2 bg-gray-700 text-white h-12 rounded w-full"></input>
            <button type="submit" className="p-2 my-6 items-center bg-red-700 text-white rounded w-full">Sign In</button>
            <p className='py-2 my-2 text-white'>New to Netflix? Sign up now.</p>
          </form>
        </div>
    </div>
  )
}

export default Login