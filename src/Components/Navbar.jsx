
import React, { useState, useEffect } from 'react';
import Search from './Search';

function Navbar() {
  const [top, setTop] = useState(true);
  const [isOpen, setisOpen] = React.useState(false);

  function handleClick() {
      setisOpen(!isOpen);
  }


  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <nav className={ `bg-indigo-700 p-4 relative  ${!top && 'bg-white shadow-lg'}`}>
      <div className="flex items-center justify-between text-white">

        <div className=" flex flex-col md:px-5 md:mx-5 items-center text-center font-semibold">
           <img src="public/vite.svg" width={50} alt=" logo" />
           <div className="text-2xl font-extrabold"> Faradars</div>
        </div>

        <div className="text-xl  hidden md:block capitalize">
            <a href="/" className="no-underline  hover:text-blue-900">home</a>
            <a href="/" className="no-underline mx-5  hover:text-blue-900">contact</a>
            <a href="/" className="no-underline  hover:text-blue-900">about</a>
            <button className="bg-green-400 py-1 px-8 rounded-lg mx-6  hover:text-blue-900">login</button>
        </div>

        <button className="p-2 rounded-lg md:hidden text-white-900" onClick={handleClick} >
                        <svg className="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {isOpen && (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
      </div> 
      <div className={`fixed flex-col justify-center  right-0 h-full  my-[3.14rem] w-[80%] rounded-md  bg-yellow rounded-lg block md:hidden  shadow-xl top-[4rem] ${  isOpen ? "block" : "hidden" }`}>
        <div className="h-[75px] top-0 bg-[#63809c] items-center justify-between">

        <Search/>
        </div>
      <div className="flex flex-col  top-5">
        <button className="flex item-center justify-between">

            <a href="/" className="no-underline block px-4 py-2 text-2xl text-[#63809c] hover:text-blue-900 ">Company</a>
            <svg className="w-4 h-4 mr-4 my-4 text-[#0035ac] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
           </svg>
            
        </button>
        
        
        <div className="flex item-center justify-between">
            <a href="/" className="no-underline my-5 block px-4 py-2 text-2xl text-[#63809c] hover:text-blue-900">Career</a>
            <svg className="w-4 h-4 mr-4 my-9 text-[#0035ac] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
        </div>
        
            <div className="flex item-center justify-between">
            <a href="/" className="no-underline block px-4 py-2 text-2xl text-[#63809c] hover:text-blue-900">News & Media</a>
            <svg className="w-4 h-4 mr-4 my-4 text-[#0035ac] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
  </svg>
           </div>
           <div className="grid item-center justify-between bg-[#63809c] h-[8rem] my-4 p-2">
            <a href="/" className="no-underline block px-4 py-2 text-[1.2rem] text-white hover:text-blue-900">Local Websites</a>
            <a href="/" className="no-underline block px-4 py-2 text-[1.2rem] text-white hover:text-blue-900">Deutsch</a>
           
           </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
