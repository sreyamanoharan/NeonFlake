import { useState } from 'react'
import UploadPage from './Pages/UploadPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UploadPage/>
    </>
  )
}

export default App
