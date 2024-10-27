import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogi' element={<BlogList />} />
        <Route path='/blogi/:id' element={<BlogPost />} />
        <Route path='/meist' element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;