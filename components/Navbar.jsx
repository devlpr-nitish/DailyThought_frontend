import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";


const Navbar = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const navigate  = useNavigate();

    const logOut = () =>{
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    }
  return (
    <div className='bg-white p-4 flex justify-between'>
        <div>
            <div className="logo font-bold text-2xl text-black  h-11 w-12 rounded-full p-1 text-center">
                <Link to="/">DT</Link>
            </div>
        </div>

        <div>
            {!isLoggedIn ? <button className='py-2 px-4 border-2 border-black cursor-pointer'>
                <Link to="signin">SIGN IN</Link>
            </button>
            :
            <div className="logo text-2xl text-black border-2 border-black h-11 w-12 rounded-full p-1 text-center">
                <span className='text-center' onClick={logOut} title='logout'>
                    <IoIosLogOut className='mx-2 mt-1'/>
                </span>
            </div>}
        </div>
    </div>
  )
}

export default Navbar;