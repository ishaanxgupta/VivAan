import "./App.css";
import { Route,Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage"; 
import DeliveryPartner from "./pages/DeliveryPartner";
import AdminPage from "./pages/AdminPage";
import Ordertrack from "./pages/Ordertrack";
import Analytics from "./pages/Analytics";


function App() {
  return (
    <div className='w-[100%] h-[100vh] '>
      <Routes>
          <Route path='/' element ={<LoginPage/>} />
          <Route path='/del' element ={<DeliveryPartner/>} />
          <Route path='/admin' element ={<AdminPage/>}/>
          <Route path='/orderTrack' element ={<Ordertrack/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
      </Routes>
    </div>
  );
}

export default App;
