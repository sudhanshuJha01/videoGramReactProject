import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon, AuthBTn, HamBurger } from "../assets/icons";
import logoImage from "../../public/logoImage.png";
import { VideoCameraIcon } from "@heroicons/react/16/solid";
import { useDispatch , useSelector } from "react-redux";
import { changeHamStatus } from "../features/hamburgurStatusSlice";
const NavBar = () => {
  const dispatch = useDispatch()
  const handleHamStatus=()=>{
    dispatch(changeHamStatus());
  }
  return (
    <section className=" min-h-16 w-full z-10 sticky top-0 bg-slate-950 p-3  rounded-lg flex items-center max-sm:gap-5 ">
        <Link to={"/"}>
          <img src={logoImage} width={160} height={120} alt="logo" />
        </Link>
      <input
        className="w-[40%] max-sm:hidden p-1 pl-7 max-md:ml-12 rounded-2xl ml-44 mr-2 outline-none text-black font-semibold"
        type="text"
        placeholder="Search.."
      />
      <SearchIcon />
      <div className="flex  gap-7 max-sm:ml-16 max-md:ml-24 lg:ml-52 max-lg:ml-52 items-end justify-end">
        <VideoCameraIcon className="w-7 hover:rounded-lg cursor-pointer hover:bg-slate-700 hover:p-1 " />
        <div className="flex gap-2 max-lg:hidden">
          <Link to={'/signup'}>
          <AuthBTn label="Sign Up" />
          </Link>
          <Link to={'/signin'}>
          <AuthBTn label="Sign In" />
          </Link>
        </div>
        <div className="md:hidden">
        <button onClick={handleHamStatus
        }>  
          <HamBurger/> 
        </button>  
       
        </div>
      </div>
    </section>
  );};

export default NavBar;
