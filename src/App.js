import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './config/ScrollToTop';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
      <Route exact path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
