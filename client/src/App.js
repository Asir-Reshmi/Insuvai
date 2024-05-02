
import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
// import Shop from './Pages/Shop';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Login from './Pages/Login';



function App() {
  
  return (
    <div>
     
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='Shop' element={<Shop/>}/> */}
          <Route path='Aboutus' element={<Aboutus/>}/>
          <Route path='Contactus' element={<Contactus/>}/>
          <Route path='Login' element={<Login/>}/>
          
         
          
        </Routes>
        
   
       
    </div>
  );
}

export default App;
