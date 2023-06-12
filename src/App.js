import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from "./pages/homepage";
import Me from './pages/Me';
import Editprofile from './components/Editprofile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostComponent from './components/post/Post';
//import HomeNavbar from './components/HomeNavbar';
import WALLET from "./components/Wallet"
import NFT from "./components/WALLET/NFTList"

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
            <Route path='/WALLET' element={<WALLET/>}/>
            <Route path='/NFTList' element={<NFT/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
