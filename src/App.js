import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from "./pages/homepage";
import Me from './pages/Me';
import Editprofile from './components/Editprofile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostComponent from './components/post/Post';
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
            <Route path='/editprofile' element={<Editprofile/>}/>
            <Route path='/make-post' element={<PostComponent/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
