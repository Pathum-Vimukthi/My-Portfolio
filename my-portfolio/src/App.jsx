import { useState } from 'react'
import SideNave from './components/SideNavBar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Main />
      <SideNave />
    </div>
  )
}

export default App
