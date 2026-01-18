
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<> <Navbar/> <Home/> </>}/>
      <Route path='/about' element={<> <Navbar/> <About /> </>}/>
      <Route path='/login' element={<> <Navbar/> <Login /> </>}/>
      <Route path='/register' element={<> <Navbar/> <Register /> </>}/>

    </Routes>

  )
}

export default App
