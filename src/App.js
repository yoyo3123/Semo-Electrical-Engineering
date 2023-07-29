import build1 from './crisscross.jpeg';
import build2 from './hospital.jpg';
import build3 from './train.jpg';
import Slogo from './SEMO_logo.png'
import Slogo2 from './Semo_logo2.png'
import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';


import {HashRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [projectlist,setProjectlist]=useState([{image:build1,description:'good building'},{image:build2,description:'good building'},{image:build3,description:'bad building'}])
  return (
    <div className="App">
      <HashRouter>
        <Header Slogo={Slogo}/>
        <Routes>
          <Route path='/Semo-Electrical-Engineering' element={<Homepage  Slogo2={Slogo2}/>}/>
          <Route path='/Homepage' element={<Homepage  Slogo2={Slogo2}/>}/>
          <Route path='/Projects' element={<Projects projectlist={projectlist}/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>


        </Routes>
        
        
        
        
      
      
      </HashRouter>
    </div>
  );
}

export default App;
