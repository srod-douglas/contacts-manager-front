import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Forgot from "../pages/Forgot";
import { UpdateContact } from "../components/contacts/UpdateContact";
import { ListContacts } from "../components/contacts/ListContacts";
import { CreateContact } from "../components/contacts/CreateContact";
import { DeleteContact } from "../components/contacts/DeleteContact";
import { Profile } from "../components/clients/Profile";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot" element={<Forgot />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="" element={<Profile />} />
        <Route path="new-contact" element={<CreateContact />} />
        <Route path="contacts" element={<ListContacts />} />
        <Route path="update-contact" element={<UpdateContact />} />
        <Route path="delete-contact" element={<DeleteContact />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
