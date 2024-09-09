import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./component/Accueil";
import Home from "./component/Home";




function App() {
  const [count, setCount] = useState(0)

  return (
   <div>

<BrowserRouter>
      <Routes>
        <Route path="Accueil" element={<Accueil />}> </Route>
        <Route path="Home" element={<Home />}></Route>
       
      </Routes>
    </BrowserRouter>

   </div>
  )
}

export default App
