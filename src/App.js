import './App.css';
import { Routes , Route } from 'react-router-dom'; 
import Home from './pages/Home'
import QueAnsPage from './pages/QueAnsPage';
import Answer from './pages/Answer'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Question-page' element={<QueAnsPage />} />
        <Route path='/:queID' element={<Answer />} />
      </Routes>
    </div>
  );
}

export default App;
