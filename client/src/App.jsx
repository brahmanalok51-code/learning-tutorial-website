import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Subject from "./pages/Subject";
import Contact from "./pages/Contact";
import BuyPayment from "./pages/BuyCourses"
import DashboardAfterRegister from "./pages/DashboardAfterRegister";
import DashboardBeforeRegister from "./pages/DashboardBeforeRegister";
import HtmlLearningPage from "./tutorials/HtmlLearningPage";
import CssLearningPage from "./tutorials/CssLearningPage";
import JavaLearningPage from "./tutorials/JavaLearningPage";
import JsLearningPage from "./tutorials/JsLearningPage";
import ReactLearningPage from "./tutorials/ReactLearningPage";


function App() {
 return(
  <>
 
  <Routes>
    <Route path="/register" element={<Registration/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/DAR" element={<DashboardAfterRegister/>} />
    <Route path="/" element={<DashboardBeforeRegister/>}/>
    <Route path="/subject" element={<Subject/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/payment" element={<BuyPayment/>}/>
    <Route path="/html" element={<HtmlLearningPage/>}/>
    <Route path="/css" element={<CssLearningPage/>}/>
    <Route path="/java" element={<JavaLearningPage/>}/>
    <Route path="/js" element={<JsLearningPage/>}/>
    <Route path="/react" element={<ReactLearningPage/>}/>
   
  </Routes>
  </>
)
}

export default App;
