import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SongList from './components/SongList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SongList/>
  )
}

export default App
