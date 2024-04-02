import './App.css'
import { Routes, Route } from "react-router-dom"
import Homepage from './components/Homepage'
import "./index.css"

function App() { 

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/* <Homepage/>  */}
    </>
  )
}

export default App
