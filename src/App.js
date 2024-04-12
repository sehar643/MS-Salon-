import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BigNavbar from './components/BigNavbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Contactus from './components/Contactus';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <BigNavbar/>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/contact' element={<Contactus />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
