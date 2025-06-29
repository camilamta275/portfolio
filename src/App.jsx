import { useState } from 'react'
import Header from './components/header/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
      </div>
    </>
  )
}

export default App
