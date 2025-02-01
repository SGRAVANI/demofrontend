import Login from "./Components/Login"
import Register from "./Components/Register"
import { Routes,Route } from "react-router-dom"
import Users from "./Components/Users"
import StateContext from "./Components/ContextAPI/StateContext"
import Header from "./Components/Header"

function App() {

  return (
    <>
   <StateContext>
    <Header/>
   {/* <Login/> */}
   <Routes>
    <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Register/>} />
     <Route path="/users" element={<Users/>} />
   </Routes>
   </StateContext>
    </>
  )
}

export default App
