import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import First from './First';
import About from './About';
import Contacts from './Contacts';

function App() {
  return <Router>
    <nav>
      <Link to = "/" className='link'>Пицца</Link>
      <Link to = "/About" className='link'>О нас</Link>
      <Link to = "/Contacts" className='link'>Контакты</Link>
    </nav>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
    </Routes>
  </Router>
}
export default App;