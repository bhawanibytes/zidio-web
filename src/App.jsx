import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnnouncementBar from './Components/AnnouncementBar'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import Contact from './Components/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
    <AnnouncementBar />
    <Header />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App