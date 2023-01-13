import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Engine from './components/Engine';
import Games from './components/Games';
import About from './components/About';
import Error from './components/Error';
import Title from './components/Title';

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


