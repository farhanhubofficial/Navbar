import Navbar from './components/Navbar/Navbar'
import './App.css'
import React, { useEffect, useState } from 'react'
function App() {
  const farhan = localStorage.getItem('farhan');
  const [theme, setTheme] = useState(farhan? farhan:'light');
  useEffect(()=>{
    localStorage.setItem('farhan', theme)
  },[theme])


  return (
    <div className={`container ${theme}`}>
<h1>
  <Navbar theme= {theme} setTheme= {setTheme}/>
</h1>
    </div>
  )
}

export default App
