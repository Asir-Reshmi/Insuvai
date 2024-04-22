
import './App.css';
import { Route ,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Gift from './Pages/Gift';
import Shop from './Pages/Shop';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Login from './Pages/Login';
// import LoginForm from './components/login';
// import RegistrationForm from './components/register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Gift' element={<Gift/>}/>
        <Route path='Shop' element={<Shop/>}/>
        <Route path='Aboutus' element={<Aboutus/>}/>
        <Route path='Contactus' element={<Contactus/>}/>
        <Route path='Login' element={<Login/>}/>
        {/* <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} /> */}
      </Routes>
       
    </div>
  );
}

export default App;
