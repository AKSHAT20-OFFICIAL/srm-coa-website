import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Faculty from './components/Faculty';
import Syllabus from './components/Syllabus';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/faculty' element={<Faculty/>}/>
      <Route path='/syllabus' element={<Syllabus/>}/>
    </Routes>
  </Router>,
    document.getElementById('root')
);