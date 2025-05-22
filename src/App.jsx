import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home.jsx'
import Footer from './pages/Footer'
import Header from './pages/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Home/>
<Footer/>
          </>
  )
}

export default App
