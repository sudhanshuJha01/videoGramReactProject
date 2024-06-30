import { BrowserRouter , Routes , Route } from "react-router-dom";
import {NavBar , SideBar , Feed} from './components/index.js'
import SignIn from "./pages/AuthPages/SignIn.jsx";
import SignUp from "./pages/AuthPages/SignUp.jsx";
const App = () => {

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
    </div>
  </BrowserRouter>
  </div>
  )
}


export default App