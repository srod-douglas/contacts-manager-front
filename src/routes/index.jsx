import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Forgot from "../pages/Forgot";
import { UpdateContact } from "../components/UpdateContact";
import { DeleteContact } from '../components/DeleteContact'

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="register" element={<Register />}/>
      <Route path="login" element={<Login />} />
      <Route path="forgot" element={<Forgot />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="update-contacts" element={<UpdateContact />} />
        <Route path="delete-contacts" element={<DeleteContact />} />
      
      
      </Route>
    </Routes>
  );
};

export default RoutesMain
