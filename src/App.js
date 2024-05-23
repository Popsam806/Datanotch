
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';


function App() {
  return (
  <div className="flex min-h-full flex-col">
    <Router>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/service' element={<Services />} />
       {/* <Route path='/dashboard' element={<Dashboard />} /> */}
       
      </Routes>
    </Router> 
    </div>
    
  );
}

export default App;
