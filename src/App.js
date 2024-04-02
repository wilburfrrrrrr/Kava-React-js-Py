// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/authContext';
import Home from './components/home/home';
import Register from './components/register/register';
import UserInfo from './components/userInfo/userInfo';
import Agenda from './components/agenda/agenda';
import Confirmation from './components/confirmation/confirmation';
import Error from './components/error/error';
import Login from './components/login/login';
import PrivateRoute from './components/private/privateRoute';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/error" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user_info" element={<PrivateRoute><UserInfo /></PrivateRoute>} />
            <Route path="/user_info/agenda" element={<PrivateRoute><Agenda /></PrivateRoute>} />
            <Route path="/user_info/agenda/confirmation" element={<PrivateRoute><Confirmation /></PrivateRoute>} />
          </Routes>
        </Router>
      </AuthProvider>    
      </div>
  );
}

export default App;
