import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import {Home} from "./pages/Home";
import Products from "./pages/Products";
import {Services} from "./pages/Services";
import Contact from "./pages/Contact";
import {Login} from "./pages/Login";
import { Header } from "./component/Header";
//  import bg from "./component/background.png"

const App = () => {
  return (
     <div>
        {/* backgroundImage:`url(${bg})   */}
    <BrowserRouter>
    <Header/>
    <Routes>
      < Route path="/" element={<Home/>}/>
      < Route path="/products" element={<Products/>}/>
      < Route path="/services" element={<Services/>}/>
      < Route path="/contact" element={<Contact/>}/>
      < Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App