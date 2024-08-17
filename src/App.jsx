
import { Nav } from './components/Nav'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Stats from './components/Stats'
import { Home } from './components/Home'


function App() {
  

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/'>
        <Route index element={<Home />} />
          <Route path='stats' element={<Stats />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
