import { useState } from 'react'
import SideNave from './components/sidenav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideNave></SideNave>
    </>
  )
}

export default App
