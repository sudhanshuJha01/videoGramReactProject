import { BrowserRouter , Routes , Route } from "react-router-dom";
import {NavBar , SideBar , Feed , HamBurgurComponent} from './components/index.js'
import SignIn from "./pages/AuthPages/SignIn.jsx";
import SignUp from "./pages/AuthPages/SignUp.jsx";
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";
const App = () => {
  const [renderSate , setRenderState]=useState('')
  const status = useSelector(state=>state.hamburgurStatus.status);
  useEffect(()=>{
    setRenderState(status)
  },[status])
  return (
    <div className="bg-slate-900 relative text-white w-full min-h-full">
    <BrowserRouter>
    <NavBar/>
    <div className="flex">
    <SideBar/>
    <Routes>
        <Route path="/"  element={<Feed/>} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
     {renderSate?<div><HamBurgurComponent/></div>:null}
    </div>
  </BrowserRouter>
  </div>
  )
}


export default App