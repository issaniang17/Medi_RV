import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/home";
import HomeDashboard from "./dashboard/HomeDashboard";
import AllDoctors from "./pages/all_doctors";
import DoctorDetail from "./pages/doctorDetail";
import { useEffect } from "react";
import AuthDashboard from "./dashboard/authDashboard";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import ResetPassword from "./pages/Auth/reset_password";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route  element={<HomeDashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<AllDoctors />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
        </Route>
        <Route path="/auth" element={<AuthDashboard />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="change-password" element={<ResetPassword/>}/>
        </Route>
      </Routes>
      <Toaster richColors position="top-center" />
    </>
  );
};

export default App;
