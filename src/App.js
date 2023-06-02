import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './config/ScrollToTop';
import Home from './components/Home';
import Q1 from './components/Q1/Q1';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/Q1' element={<Q1/>} />
      </Routes>
    </Router>
  );
}

export default App;
