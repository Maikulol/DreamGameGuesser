import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Engine from './components/Engine';
import Games from './components/Games';
import About from './components/About';
import Error from './components/Error';
import Title from './components/Title';

// This is the parent that holds all of the different pages of the website.
// This includes the logo that acts as a home button in the top left corner.
// The router tag and its variables are used to route different js files to different URL links.
// For example, localhost:3000/ is just the home page, while /engine will take you to the Engine.js page.
function App() {
  return (
    <Router>
      <Title/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/engine' element={<Engine/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;


