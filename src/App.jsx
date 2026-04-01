import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main style={{ flex: 1, paddingBlock: 'var(--spacing-lg)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
