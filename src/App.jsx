import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Contact from './pages/Contact'
import OurWorks from './pages/OurWorks'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import Bill from './pages/Bill'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ width: '100vw', overflow: 'hidden' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<OurWorks />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/start" element={<div>Start Project</div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
