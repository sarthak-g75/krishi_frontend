
import './App.css';
import {Route,Routes} from 'react-router-dom'
import AuthState from './context/auth/authState';
import Navbar from './Navbar.js'
import SoilTesting from './SoilTesting';
import Home from './Home'; 
import Footer from './Footer';
import RentEquipment from './RentEquipment';
import GetEquipment from './GetEquipment';
import HireLabour from './HireLabour';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <>
    <AuthState>
      <Navbar/>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/soilTesting' element={<SoilTesting/>}/>
    <Route path='/rentEquipment' element={<RentEquipment/>}/>
    <Route path='/getEquipment' element={<GetEquipment/>}/>
    <Route path='/hireLabour' element={<HireLabour/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      
      <Footer/>
      </AuthState>
      </>
  );
}

export default App;
