import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Faculty from './components/Faculty';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/faculty' element={<Faculty/>}/>
    </Routes>
  </Router>,
    document.getElementById('root')
);