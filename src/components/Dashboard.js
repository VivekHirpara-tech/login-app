import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="container text-center mt-5">
            <h2>Welcome, {user?.name}!</h2>
            <p>Your Email: {user?.email}</p>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
