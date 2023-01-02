
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import NavBar from './components/NavBar'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

const  App =()=> {
  const [progress, setProgress] = useState(0)
 

  const setProgresss = (progress) => {
        setProgress(progress)
  }
 
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
            color='blue'
            progress={progress}

          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgresss} key="home" pagesize={10} category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgresss} key="business" pagesize={15} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgresss} key="entertainment" pagesize={15} category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgresss} key="general" pagesize={15} category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgresss} key="health" pagesize={15} category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgresss} key="science" pagesize={15} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgresss} key="sports" pagesize={15} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgresss} key="technology" pagesize={15} category="technology" />} />
          </Routes>
        </Router>
      </>
    );
  }

  export default App










