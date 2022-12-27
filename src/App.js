import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './pages/components/layout/NavBar';
import './assets/css/App.css'
import './assets/css/Media.css'
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
