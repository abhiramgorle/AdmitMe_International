import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from './routes/Home'
import WhatWeDo from "./routes/WhatWeDo"
import WhoWeAre from "./routes/WhoWeAre";
import ScrollToTop from "./Components/ScrollToTop";
import LetsTalk from "./routes/LetsTalk";
import HowWeDo from "./routes/HowWeDo";
import StudyDest from "./routes/StudyDest";
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
      </Routes> 
      </ScrollToTop>
    </div>
  );
}

export default App;
