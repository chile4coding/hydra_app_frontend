import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from "./pages/homepage";
import Me from './pages/Me';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import HomeNavbar from './components/HomeNavbar';

function App() {
  return (
    <div className="">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
              {/* <Route path='podcast' element={<Podcast/>}/>
              <Route path='notification' element= {<Notification/>}/>
              <Route path='message' element= {<Message/>}/> */}
            <Route path='/me' element={<Me/>}/>
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
