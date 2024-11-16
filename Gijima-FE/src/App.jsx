
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from "./features/auth/privateRoute.jsx";
import Login from "./components/Login.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<HomePage />} />
                    {/* Add more protected routes here */}
                </Route>
            </Routes>
        </Router>
    );
}
export default App
