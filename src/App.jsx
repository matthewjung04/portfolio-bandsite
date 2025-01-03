import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import ShowsPage from './pages/ShowsPage/ShowsPage'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route to='/' element={<HomePage />}/>
        <Route to='/shows' element={<ShowsPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App