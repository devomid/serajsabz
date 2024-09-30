import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import Brancehs from './pages/branches';
import OurCustomers from './pages/ourCustomers';
import OurServices from './pages/ourServices';
import OurStory from './pages/ourStroy';
import OurTeam from './pages/ourTeam';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import FooterPage from './components/footer/footerPage';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav style={{ position: 'fixed', right: 0, top: 0, width: '100%' }}><NavBar /></nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/branches' element={<Brancehs />} />
          <Route path='/ourCustomers' element={<OurCustomers />} />
          <Route path='/ourServices' element={<OurServices />} />
          <Route path='/ourStory' element={<OurStory />} />
          <Route path='/ourTeam' element={<OurTeam />} />
        </Routes>
        <footer style={{ position: 'fixed', right: 0, bottom: 0, width: '100%' }}><Footer /></footer>
        {/* <FooterPage /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
