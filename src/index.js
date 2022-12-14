import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Faculty from './components/Faculty';
import Syllabus from './components/Syllabus';
import Units from './components/Units';
import Login from './components/Login';
import Home from './components/Home';
import Practical from './components/Practical';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/faculty' element={<Faculty/>}/>
      <Route path='/syllabus' element={<Syllabus/>}/>
      <Route path='/units' element={<Units/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/practical' element={<Practical/>}/>
    </Routes>
  </Router>,
    document.getElementById('root')
);