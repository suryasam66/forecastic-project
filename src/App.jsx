
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Weather from './components/Weather/Weather';
import Analytics from './components/Menu/Analytics';
import Calender from './components/Menu/Calender';
import Locations from './components/Menu/Locations';
import Settings from './components/Menu/Settings';


function App() {
 

  return (
    
    <Router>
      <Routes>
        <Route path="/" element= { <Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/calender" element={<Calender />}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </Router>
  )
}

export default App
