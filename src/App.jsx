import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import VisualMedicine from './pages/VisualMedicine'
import Post from './pages/Post'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visual-medicine" element={<VisualMedicine />} />
            <Route path="/post/:slug" element={<Post />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
