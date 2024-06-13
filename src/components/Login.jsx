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
        <div>
          <form className='bg-black relative'>
            <input type="text"  placeholder='Email Address' className="p-2 m-2"></input>
            <input type="password"  placeholder="Password" className="p-2 m-2"></input>
            <button type="submit" className="p-2 m-2 bg-white">Sign In</button>
          </form>
        </div>
    </div>
  )
}

export default Login