import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useTheme } from './hooks/useTheme.js'

const Home = lazy(() => import('./pages/Home/Home.jsx'))
const Post = lazy(() => import('./pages/Post/Post.jsx'))
const About = lazy(() => import('./pages/About/About.jsx'))

export default function App() {
  const { theme, setTheme } = useTheme()

  return (
    <BrowserRouter>
      <Header theme={theme} setTheme={setTheme} />
      <main style={{ flex: 1, paddingBlock: 'var(--spacing-lg)' }}>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<Post />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
