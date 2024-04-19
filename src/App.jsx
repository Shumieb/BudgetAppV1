import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Footer/Footer'
import Header from './Header/Header'
import Home from './HomePage/HomePage';
import About from './AboutPage/AboutPage';
import NoMatch from './NoMatch/NoMatch';
import Contact from './ContactPage/ContactPage';

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
