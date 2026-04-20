import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateCrewmate from './pages/CreateCrewmate'
import CrewGallery from './pages/CrewGallery'
import CrewmateDetail from './pages/CrewmateDetail'
import EditCrewmate from './pages/EditCrewmate'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateCrewmate />} />
            <Route path="/crew" element={<CrewGallery />} />
            <Route path="/crew/:id" element={<CrewmateDetail />} />
            <Route path="/crew/:id/edit" element={<EditCrewmate />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App