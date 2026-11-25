import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import DoctorRegister from "./pages/doctor/doctorRegister";
import PatientDashboard from "./dashboard/patientDashboard";
import Acceuil from "./pages/patient/acceuil";
import RendezVous from "./pages/patient/rendez_vous";
import Profil from "./pages/patient/profil";
import DoctorDashboard from "./pages/doctor/doctorDashboard";
import ViewAll from "./pages/doctor/viewAll";
import Disponibility from "./pages/doctor/disponibility";
import RvAction from "./pages/doctor/rvAction";
import FiltreRv from "./pages/doctor/filtreRv";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route element={<HomeDashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<AllDoctors />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
        </Route>
        <Route path="/auth" element={<AuthDashboard />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="change-password" element={<ResetPassword />} />
        </Route>
        <Route path="/doctor-applications/" element={<DoctorRegister />} />
        <Route path="/auth/me/" element={<PatientDashboard />}>
          <Route index element={<Navigate to="accueil" replace />} />
          <Route path="accueil" element={<Acceuil />} />
          <Route path="appointments" element={<RendezVous />} />
          <Route path="profil" element={<Profil />} />
        </Route>
        <Route path="/doctor/dashboard/" element={<DoctorDashboard/>}>
        <Route index element={< Navigate to={'view'} replace/>}/>
        <Route path="view" element={<ViewAll/>}/>
        <Route path="availabilities" element={<Disponibility/>}/>
        <Route path="appointments" element={<RvAction/>}>
        <Route index element={<Navigate to='all' replace/>}/>
          <Route path=":slug" element={<FiltreRv/>}/>
        </Route>
        </Route>
      </Routes>
      <Toaster richColors position="top-center" />
    </>
  );
};

export default App;
