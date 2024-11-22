import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, USER_LOGO } from '../utils/constant.js';
import chatGPTLogo from '../utils/LOGO/ChatGPT5-Logo-PNG.png';
import { toogleGptSearch } from '../utils/gptSlice.js';
import { GptSearchBar } from './GptSearchBar.jsx';
import ToggleLanguage from './ToggleLanguage.jsx'
import ToggleTheme from './ToggleTheme.jsx'

const Header = () => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isGptSearchToggled = useSelector((store) => store.gptSearch.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGptSearchToggle = () => {
    dispatch(toogleGptSearch());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, password, name } = user;
        dispatch(
          addUser({
            email,
            password,
            name,
          })
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="w-full absolute px-36 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      {/* Left section with logo */}
      <img className="w-44" src={NETFLIX_LOGO} alt="netflixLogo" />

      {/* Center section with search bar */}
      {isGptSearchToggled && (
        <div className="flex-grow flex justify-center">
          <GptSearchBar />
        </div>
      )}

     
      {user && (
        <div className="flex items-center space-x-16">
          {/* ChatGPT Logo */}
          <img
            className="w-12 h-12 cursor-pointer"
            alt="chatGPTLogo"
            src={chatGPTLogo}
            onClick={handleGptSearchToggle}
          />

          {/* User Icon and Dropdown */}
          <div className="flex items-center space-x-2">
            <img className="w-11 h-11 rounded-md" alt="userIcon" src={USER_LOGO} />

            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="cursor-pointer py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.0"
                  stroke="currentColor"
                  className="w-6 h-6 font-bold"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
                </svg>
              </div>

              {isHovered && (
                <div className="absolute right-0 mt-1 w-52 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div>
                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      My Account
                    </a>
                    <a href="/prof" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Price
                    </a>
                    <a
                      onClick={handleSignOut}
                      href="/"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-300"
                    >
                      Sign Out
                    </a>
                  </div>
                </div>
              )}


            </div>
          </div>
        </div>
      )}
      <div className='flex align-middle content-end gap-x-5'>
        <ToggleLanguage/>
        <ToggleTheme/>
      </div>
    </div>
  );
};

export default Header;
