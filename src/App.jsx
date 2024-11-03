import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnnouncementBar from './Components/AnnouncementBar'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import Contact from './Components/Contact'
import About from './pages/about';
import BuildingIt from './pages/BuildingIt'
import Services from './Components/Services'


function App() {
  return (
    <>
    <BrowserRouter>
    <AnnouncementBar />
    <Header />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact/>} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<BuildingIt/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App