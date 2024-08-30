import './App.css';
import Login from './components/LoginPage';
import HomePage from './components/HomePage';
import Signup from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-1">
                    <Routes>
                        <Route 
                            path="/login" 
                            element={
                                <PublicRoute element={<Login />} restricted={true} />
                            } 
                        />
                        <Route 
                            path="/signup" 
                            element={
                                <PublicRoute element={<Signup />} restricted={true} />
                            } 
                        />
                        <Route 
                            path="/home" 
                            element={
                                <PrivateRoute element={<HomePage />} />
                            } 
                        />
                        <Route 
                            path="/" 
                            element={
                                <PublicRoute element={<Login />} restricted={true} />
                            } 
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
