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
import Personel from './pages/omidazad';
import OmidAzad from './pages/omidazad';
import Mohsenamoushahi from './pages/mohsenamoushahi';
import Janyarbahrami from './pages/janyarbahrami';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav style={{ position: 'fixed', right: 0, top: 0, width: '100%', zIndex: 100 }}><NavBar /></nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/branches' element={<Brancehs />} />
          <Route path='/ourCustomers' element={<OurCustomers />} />
          <Route path='/ourServices' element={<OurServices />} />
          <Route path='/ourStory' element={<OurStory />} />
          <Route path='/ourteam' element={<OurTeam />} />
          <Route path='/ourteam/omidazad' element={<OmidAzad />} />
          <Route path='/ourteam/janyarbahrami' element={<Janyarbahrami />} />
          <Route path='/ourteam/mohsenamoushahi' element={<Mohsenamoushahi />} />
        </Routes>
        <footer style={{ position: 'fixed', right: 0, bottom: 0, width: '100%', zIndex: 100 }}><Footer /></footer>
        {/* <FooterPage /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
