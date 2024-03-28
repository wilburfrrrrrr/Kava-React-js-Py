// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Register from './components/register/register';
import UserInfo from './components/userInfo/userInfo';
import Agenda from './components/agenda/agenda';
import Confirmation from './components/confirmation/confirmation';
import Error from './components/error/error';
import Login from './components/login/login';
import NotUserFound from './components/notUserFound/notUserFound';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/error" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/not_user" element={<NotUserFound />} />
          <Route path="/user_info" element={<UserInfo />} />
          <Route path="/user_info/agenda" element={<Agenda />} />
          <Route path="/user_info/agenda/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    
    </div>

      
              
  );
}

export default App;
