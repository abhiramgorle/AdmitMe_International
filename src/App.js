import React from "react";
import {Routes,Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './routes/Home';
import WhatWeDo from "./routes/WhatWeDo"
import WhoWeAre from "./routes/WhoWeAre";
import ScrollToTop from "./Components/ScrollToTop";
import LetsTalk from "./routes/LetsTalk";
import HowWeDo from "./routes/HowWeDo";
import StudyDest from "./routes/StudyDest";
import Eduloans from "./routes/Eduloans";
import TestPrep from "./routes/TestPrep";
import Immigrate from "./routes/Immigrate";
function App() {
  return (
    <div> 
      <ScrollToTop>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/WhatWeDo" element={<WhatWeDo />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/LetsTalk" element={<LetsTalk />} />
        <Route path="/HowWeDo" element={<HowWeDo />} />
        <Route path="/StudyDest" element={<StudyDest />} />
        <Route path="/Eduloans" element={<Eduloans />} />
        <Route path="/Immigrate" element={<Immigrate />} />
        <Route path="/TestPrep" element={<TestPrep />} />
        <Route path="*" element= < Navigate to={{pathname: '/WhatWeDo'}} / > /> 
      </Routes> 
      </ScrollToTop>
    </div>
  );
}

export default App;
