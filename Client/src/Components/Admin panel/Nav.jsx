import { useAuth } from '../../store/AuthContext';

const Nav = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout(); // Call the logout function from the context
    };

    return (
        <div className="nav">
            <h1>VitalMediquip</h1>
            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Nav;
