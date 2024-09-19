import { useState } from 'react'
import SideNave from './components/SideNavBar'
import Main from './components/Main'
import Education from './components/Education'
import AboutMe from './components/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SideNave />
      <Main />
      <AboutMe/>
    </div>
  )
}

export default App
