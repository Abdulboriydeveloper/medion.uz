import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Frame1 from './component/frame1/frame1';
import Frame2 from './component/frame2/frame2';
import Frame3 from './component/frame3/frame3';
import Frame4 from './component/frame4/frame4';
import Frame5 from './component/frame5/frame5';
import Frame6 from './component/frame6/frame6';
import Frame8 from './component/frame8/frame8';
import Frame9 from './component/frame9/frame9';
import Frame11 from './component/frame11/frame11';
import Frame12 from './component/frame12/frame12';
import Frame13 from './component/frame13/frame13';
import Frame14 from './component/frame14/frame14';
import Frame15 from './component/frame15/frame15';
import Frame16 from './component/frame16/frame16';
import Frame18 from './component/frame18/frame18';
import Frame19 from './component/frame19/frame19';
import Frame20 from './component/frame20/frame20';
import Frame21 from './component/frame21/frame21';
import Frame23 from './component/frame23/frame23';
import Frame24 from './component/frame24/frame24';
import Frame25 from './component/frame25/frame25';
import Footer from './component/footer/footer';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Frame1 />}></Route>
          <Route path="frame2" element={<Frame2 />}></Route>
          <Route path="frame3" element={<Frame3 />}></Route>
          <Route path="frame4" element={<Frame4 />}></Route>
          <Route path="frame5" element={<Frame5 />}></Route>
          <Route path="frame6" element={<Frame6 />}></Route>
          <Route path="frame8" element={<Frame8 />}></Route>
          <Route path="frame9" element={<Frame9 />}></Route>
          <Route path="frame11" element={<Frame11 />}></Route>
          <Route path="frame12" element={<Frame12 />}></Route>
          <Route path="frame13" element={<Frame13 />}></Route>
          <Route path="frame14" element={<Frame14 />}></Route>
          <Route path="frame15" element={<Frame15 />}></Route>
          <Route path="frame16" element={<Frame16 />}></Route>
          <Route path="frame18" element={<Frame18 />}></Route>
          <Route path="frame19" element={<Frame19 />}></Route>
          <Route path="frame20" element={<Frame20 />}></Route>
          <Route path="frame21" element={<Frame21 />}></Route>
          <Route path="frame23" element={<Frame23 />}></Route>
          <Route path="frame24" element={<Frame24 />}></Route>
          <Route path="frame25" element={<Frame25 />}></Route>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    
  </>
  );
}

export default App;

