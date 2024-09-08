import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from "./component/FormComponent";




function App() {
  const [count, setCount] = useState(0)

  return (
   <div>

<BrowserRouter>
      <Routes>
        <Route path="FormComponent" element={<FormComponent />}>
        </Route>
      </Routes>
    </BrowserRouter>

   </div>
  )
}

export default App
