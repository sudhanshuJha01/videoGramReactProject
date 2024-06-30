import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon, AuthBTn, HamBurger } from "../assets/icons";
import logoImage from "../../public/logoImage.png";
import { VideoCameraIcon } from "@heroicons/react/16/solid";
import { changeHamStatus } from "../features/hamburgurStatusSlice";
import { useSelector , useDispatch } from "react-redux";
const NavBar = () => {
 const [currStatus , setCurrStatus] = useState(false);
 const dispatch = useDispatch() 
 const handleHamburgurOnSmallScreen = ()=>{
   dispatch(changeHamStatus(finalStatus))
   setFinalStatus(status)
   
  }
  console.log(finalStatus);
  const status = useSelector(state => state.hamburgurStatus.status);
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
        <div className="lg:hidden">
        <button onClick={handleHamburgurOnSmallScreen}>  
          <HamBurger /> 
        </button>  
       
        </div>
      </div>
    </section>
  );};

export default NavBar;
