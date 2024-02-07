import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Doctordetails from "../pages/Doctor/Doctordetails";
import Doctors from "../pages/Doctor/Doctors";



import {Routes,Route} from 'react-router-dom'

const Router = () => {
  return <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/doctordetails" element={<Doctordetails/>}/>
            <Route path="/doctors" element={<Doctors/>}/>
    


  </Routes>
}

export default Router;
