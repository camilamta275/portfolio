import { useState } from 'react'
import Header from './components/header/index.jsx'
import HeroSection from './components/heroSection/index.jsx'
import About from './containers/about/index.jsx'
import Projects from './containers/projects/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
