import React, {useState} from 'react'
import Navbar from './components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import Placeorder from './pages/Placeorder/placeorder'
import Login from './components/Login/login'
function App(){

  const [showlogin,setShowlogin] = useState(false)

  return (
    <div>
      {showlogin?<Login setShowlogin={setShowlogin}/>:<></>}
      <Navbar setShowlogin={setShowlogin} />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/cart" element={< Cart />} />
        <Route path="/placeorder" element={< Placeorder />} />
      </Routes>
    </div>
  )
}

export default App
