import React, { useState } from "react";
import { HomeIcon, ClockIcon } from "@heroicons/react/16/solid";
import SideBarBtn from "./SideBarBtn";
import explore from "../constants/sideBarItems";

const SideBar = () => {
 
  return (
    <div className="max-md:hidden w-1/6 h-full p-3 m-0.5 bg-slate-950 rounded-md text-white font-serif">
      <div>
        <SideBarBtn label={"Home"} icon={<HomeIcon className="w-7 my-2" />} />
        <SideBarBtn
          label={"History"}
          icon={<ClockIcon className="w-6 my-2" />}
        />
        <hr className="border-t-1 border-slate-400 my-5 mx-auto" />
      </div>
      <div>
        <h1>Explore</h1>
        <ul>
        {explore.map(item=>(
          <li><SideBarBtn label={item.label} icon={item.icon} /></li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
