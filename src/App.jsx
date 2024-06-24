import { BrowserRouter , Routes , Route } from "react-router-dom";
import {NavBar , SideBar , Feed} from './components/index.js'


const App = () => {

  return (
    <div className="bg-slate-900 text-white w-full absolute">
    <BrowserRouter>
    <NavBar/>
    <SideBar/>
    <Routes>
        <Route path="/"  element={<Feed/>} />
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App