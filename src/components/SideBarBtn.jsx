import React from "react";

const SideBarBtn = ({ icon, label }) => {
  return (
      <div className="flex items-center justify-start gap-3 cursor-pointer hover:bg-slate-900 p-1 rounded-md">
        <span>{icon}</span>
        <span>{label}</span>
    </div>
  );
};

export default SideBarBtn;
