// import { useState,useEffect } from "react";
import logo from "../../assets/images/logo.png" ;

import userLogo from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import {BiMenu} from 'react-icons/bi';

const navLink=[
{
  path:'./home',
  display:'Home'
},
{
  path:'./doctors',
  display:'Find A Doctor'
},
{
  path:'./services',
  display:'Services'
},
{
  path:'./contact',
  display:'Contact Us'
},
]

const Header = () => {
  // const [fix,setFix] =useState[false];
  // useEffect(()=>{
  //   const handleScroll=()=>{
  //     setFix(window.scrollY>140);
  //   }
  //   window.addEventListener(scroll,handleScroll)
  //   return window.removeEventListener("scroll",handleScroll)
  // })
 
 
  return (
    <header className="header flex items-center " >
      <div className="container ">
          <div className="flex items-center justify-between">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="navigator ">
                <ul className="flex items-center gap-4">
                    {
                      navLink.map((link,index)=><li key={index}>
                        <NavLink to={link.path} className={navClass=>navClass.isActive?'text-primaryColor text-[16px] leading-7 font-[600]':'text-textColor text-[16px] leading-7 font-[500]'}>
                          {link.display}
                        </NavLink>
                      </li>)
                    }
                </ul>
            </div>
            <div className="flex item-center gap-6">
                  <div className="hidden">
                    <Link to='/'>
                      <figure className="w-[35px] h-[35px] rounded-full">
                        <img src={userLogo} className="w-[35px] rounded-full cursor-pointer" alt=""/> 
                      </figure>
                    </Link>
                  </div>
                  <div>
                    <Link to='./login'>
                      <button className=" text-white bg-primaryColor py-2 px-5 rounded-[50px] font-[600] h-[44px]
                      flex items-center justify-between">LogIN</button>
                    </Link>

                    <span className="md:hidden">
                      <BiMenu className="w-6 h-6 cursor-pointer"/>
                    </span>
                  </div>

            </div>

          </div>

      </div>
    </header>
  )
}

export default Header;
