import { Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"
import Home from "./pages/home"
import HomeDashboard from "./dashboard/HomeDashboard"



const App = () => {
  
  return (
    <>
    <Routes>
      <Route element={<HomeDashboard/>}>
      <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
    <Toaster richColors position="top-center"/>
  </>)
}

export default App