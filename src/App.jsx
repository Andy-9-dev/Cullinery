import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Orders from './pages/Orders'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  )
}
