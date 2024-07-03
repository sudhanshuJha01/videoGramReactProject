import { BrowserRouter , Routes , Route } from "react-router-dom";
import {NavBar , SideBar , Feed , HamBurgurComponent} from './components/index.js'
import SignIn from "./pages/AuthPages/SignIn.jsx";
import SignUp from "./pages/AuthPages/SignUp.jsx";
import { useSelector } from 'react-redux'
const App = () => {
  const status = useSelector(state => state.hamburgurStatus.status);
  const test = status
      
  return (
    <div className="bg-slate-900 relative text-white w-full min-h-full">
    <BrowserRouter>
    <NavBar/>
    {test?<HamBurgurComponent />:null}
    <div className="flex">
    <SideBar/>
    <Routes>
        <Route path="/"  element={<Feed/>} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </div>
  </BrowserRouter>
  </div>
  )
}


export default App