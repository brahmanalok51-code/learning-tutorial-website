import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ClientData from "./pages/ClientData";
import UserDashboard from "./pages/UserDashboard";
import Subject from "./pages/Subject";
import Contact from "./pages/Contact";
import BuyPayment from "./pages/BuyPayment"

function App() {
 return(
  <>
  <Routes>
    <Route path="/" element={<Registration/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/userDashboard" element={<UserDashboard/>} />
    <Route path="/clientdata" element={<ClientData/>} />
    <Route path="/subject" element={<Subject/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/payment" element={<BuyPayment/>}/>
  </Routes>
  </>
)
}

export default App;
