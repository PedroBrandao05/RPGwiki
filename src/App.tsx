import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import LandingPage from './pages/LandingPage'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/inicio' element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
