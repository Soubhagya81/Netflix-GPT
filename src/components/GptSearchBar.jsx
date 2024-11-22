import React from 'react';

export const GptSearchBar = () => {
  return (
    <form className="w-3/5 mx-auto border-red-700">
      <div className="flex bg-black bg-opacity-50 rounded-lg">
        <div className="relative group">
          <button
            id="dropdown-button"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-transparent border border-red-700 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-red-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            Categories
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="absolute z-10 hidden divide-y  shadow w-44 dark:bg-gray-700 group-hover:block"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              {['Horror', 'Thriller', 'Action', 'Drama', 'More...'].map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-white bg-transparent rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:border-blue-500"
            placeholder="Try GPT Search to provide you best movies.."
            required
          />
        </div>
      </div>
    </form>
  );
};
