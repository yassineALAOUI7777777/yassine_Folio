import logo from './logo.svg';
import './App.css';
import { Button, Image } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavbarCom';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Formation from './components/Formation';
import Experience from './components/Experience';


import Publication from './components/Publication';
import Footer from './components/Footer'
function App() {

  return (
    <div className="App" >
      <Header />
      <div style={{ backgroundColor: "white" }}>
      <BrowserRouter>
        <Navbar />

        <div>
          
            <Routes>
              <Route path="/*" element={<Home />}></Route>
              <Route path="/formation/*" element={<Formation />}></Route>
              <Route path="/experience/*" element={<Experience />}></Route>
              
              <Route path="/publication/*" element={<Publication />}></Route>
              
            </Routes>
          
        </div>
        </BrowserRouter>

      </div>

      <Footer/>
    </div>
  );
}

export default App;
