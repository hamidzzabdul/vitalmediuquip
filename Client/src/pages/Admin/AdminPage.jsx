import { useState } from 'react';
import Sidebar from '../../Components/Admin panel/Sidebar';
import Nav from '../../Components/Admin panel/Nav';
import { Outlet } from 'react-router-dom';
import '../../Components/Admin panel/Admin.scss';
import { useAuth } from '../../store/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

const AdminPage = () => {
    const { isLoggedIn, login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 3000));

        if (username === 'admin' && password === 'vital@2024') {
            login(username, password);
        } else if (username === "" || password === "") {
            toast.error('Please fill all the fields')
        } else {
            toast.error('Invalid Credentials')
        }
        setLoading(false)
    };

    if (!isLoggedIn) {
        return (
            <div className="admin-page">
                <ToastContainer />
                <div className="login-container">
                    <h2>Login</h2>
                    <form className="input-container">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                    </form>
                    <button onClick={handleLogin} className={loading && "active"}> {loading ? <div className="spinner" /> : 'Login'}</button>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="admin-content">
                <Outlet />
            </div>
            <Nav />
        </div>
    );
};

export default AdminPage;
