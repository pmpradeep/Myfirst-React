import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import Nav from './Nav';
import Home from './pages/Home';
import Secondsec from './Secondsec';
import Thirdsec from './Thirdsec';
import Fourthsec from './Fourthsec'
import Fifthsec from './Fifthsec'
import Sixthsec from './Sixthsec';
import Seventhsec from './Seventhsec';
import Eighthsec from './Eighthsec';
import Ninethsec from './Ninethsec';
import Tenthsec from './Tenthsec';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Classcomp from './Classcomp'
import Hooks from './Hooks';
import { Component } from 'react';
import Component1 from './WithoutUsecontext';
import Usecontext from './Usecontext';
import Tool from './Tool';

import Sample from './UseReducer';
import UseReducer from './UseReducer';


import Reabootstrap from './Reabootstrap';
import BasicExample from "./components/Navmenu";
import Navmenu from "./components/Navmenu";
import Nopage from "./NoPage";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Searchhotels from "./pages/Searchhotels";
import Learnmore from "./pages/Learnmore";

// function App() {
//   return (
//     <div>

//        <Home /> 
//        <Reabootstrap/>



//        {/* <Secondsec/>
//        <Thirdsec/>
//        <Fourthsec/>
//        <Fifthsec/>
//        <Sixthsec/>
//        <Seventhsec/>
//        <Eighthsec/> 
//        <Ninethsec/>
//        <Tenthsec/>



//        <Classcomp/>
//        <Tool name="ram" bike="RE"/>
//         <Hooks/>

//         <Component1/>
//         <Usecontext/>
//         <UseReducer/> */}
//     </div>

//   );
// }

function App() {
  return (
    
  
    <BrowserRouter>
   
      <Routes>
       
        <Route path="/" element={<Navmenu/>}>
         <Route index element={<Home/>} />
         <Route path="Secondsec/:id/" element={<Secondsec />} />
         <Route path="About" element={<Aboutus/>} />
         <Route path="blog" element={<Blog/>} />
         <Route path="Contact" element={<Contact/>} />
         <Route path="Signup" element={<Signup/>} />
         <Route path="Searchhotels" element={<Searchhotels/>} />
         <Route path="Learnmore" element={<Learnmore/>} />
         <Route path="*" element={<Nopage/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;







{/* <Route path="Thirdsec" element={<Thirdsec />} /> */}