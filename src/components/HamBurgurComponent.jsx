import React from 'react'
import { HomeIcon, ClockIcon } from "@heroicons/react/16/solid";
import SideBarBtn from "./SideBarBtn";
import explore from "./sideBarItems"
33
const HamBurgurComponent = () => {

  
  return (
    <div className='text-white w-3/4 h-3/4 md:hidden right-0 p-7 mr-4 mt-1 fixed z-10 bg-slate-800 rounded-lg shadow-lg overflow-scroll  '>
   
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
          <li key={item.label}><SideBarBtn label={item?.label} icon={item?.icon} /></li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default HamBurgurComponent