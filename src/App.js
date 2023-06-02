import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './config/ScrollToTop';
import Home from './components/Home';
import Q1 from './components/Q1/Q1';
import Q2 from './components/Q2/Q2';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/Q1' element={<Q1/>} />
      <Route exact path='/Q2' element={<Q2/>} />
      </Routes>
    </Router>
  );
}

export default App;
