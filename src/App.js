import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './conponents/Navbar/Navbar';
import { Home } from './conponents/Home-Page/Home';
import { MenuHome } from './conponents/Menu-page/MenuHome';
import { ServiceHome } from './conponents/Service-page/ServiceHome';
import { AboutHome } from './conponents/About-page/AboutHome';
import { ContactHome } from './conponents/Contact/ContactHome';
import { BlogHome } from './conponents/Blog/BlogHome';
import { BlogPage } from './conponents/Blog/BlogPage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<MenuHome />} />
        <Route path='/service' element={<ServiceHome />} />
        <Route path='/about' element={<AboutHome />} />
        <Route path='/contact' element={<ContactHome />} />
        <Route path='/blog' element={<BlogHome />} />
        <Route path='/blog-page' element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
