import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Dashboard/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import RSVP from './Pages/RSVP';
import Contact from './Pages/contact';
function App() {

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
