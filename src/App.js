import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navigation/Navbar';
import Character from './components/Characters/Character';
import Characters from './components/Characters/Characters';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="routrs-container">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
