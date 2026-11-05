import { Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"
import Home from "./pages/home"



const App = () => {
  
  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
    <Toaster richColors position="top-center"/>
  </>)
}

export default App