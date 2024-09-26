import React from 'react'

const Header = () => {
  return (
    <div className=' w-full absolute px-36 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
       src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
       alt='logo'>
      </img>
      <div className='p-2 '>
        <img className='w-11 h-11'
        alt='userIcon'
        src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-2fg93funipvqfs9i.webp'>        
      </img>
      </div>
    </div>
  )
}

export default Header