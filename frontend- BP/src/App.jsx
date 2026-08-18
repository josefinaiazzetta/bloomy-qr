import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Premio from './pages/Premio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/premio" element={<Premio />} />
    </Routes>
  )
}

export default App