import React from 'react'
import unicorn from '../images/unicorn.png';
import useTheme from '../context/Theme';
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";


function Header() {

    const {themeMode, lightTheme, darkTheme}  = useTheme();
    function toggleTheme() {
        // console.log(themeMode)
        if (themeMode === "dark") {
            lightTheme()
        } 
        else {
            darkTheme();    
        }
    };

    return (
        <div className=''>
            <div className='text-center'>
                <div className='flex gap-3 text-center justify-center'>
                    <h1 className=' text-4xl font-bold mb-5 my-3 dark:text-[#B3B3B3]'>
                    Emoji Search</h1>
                    <img src={unicorn} alt='unicorn' className=' w-14 h-14'/>
                </div>
                <p className='text-lg my-1 dark:text-[#B3B3B3]'>A simple emoji search tool made with ReactJS.</p>
                {/* toggle theme */}
                <div className='flex max-w-max border-2 border-gray-400 gap-x-2 p-[1px] justify-center mx-auto my-6 rounded-full'>
                    <button onClick={() => toggleTheme()}
                    className={`${themeMode === "light" ? 
                    " bg-yellow-200 text-richblack-5 rounded-full py-2 px-4 transition-all duration-200" : 
                    "bg-transparent"}`}>
                    <IoSunnySharp />
                </button>
                <button onClick={() => toggleTheme()}
                    className={`${themeMode === "dark" ? 
                        " bg-gray-500 text-richblack-5 rounded-full py-2 px-4 transition-all duration-200" : 
                        "bg-transparent text-white"}`}>
                    <IoMoonSharp />
                </button>
                
                </div>
                <p className='text-sm my-5 dark:text-[#B3B3B3]'>Switch to your preferred theme.</p>
            </div>
        </div>
    )
}

export default Header