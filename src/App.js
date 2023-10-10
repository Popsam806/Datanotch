
import './App.css';
import Dashboard from './components/dashboard';
//import Home from './components/home';
import Homepage from './components/homepage';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <div className="flex min-h-full flex-col">
    <Router>
      <Routes>
       <Route path='/' element={<Homepage />} />
       <Route path='/login' element={<Login />} />
       <Route path='/dashboard' element={<Dashboard />} />
       
      </Routes>
    </Router> 
    </div>
    
  );
}

export default App;
