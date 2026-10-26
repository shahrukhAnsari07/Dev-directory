import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const nav = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  const handleLogout = () => { logout(); navigate('/'); };

  return <header className="navbar">
    <div className="nav-inner container">
      <NavLink to="/" className="brand"><span className="brand-mark">&lt;/&gt;</span><span>DevDirectory</span></NavLink>
      <nav className="nav-links">
        <NavLink to="/" className={nav}>Home</NavLink>
        <NavLink to="/users" className={nav}>Developers</NavLink>
        {isAuthenticated && <NavLink to="/add-post" className={nav}>Publish</NavLink>}
      </nav>
      <div className="nav-account">
        {isAuthenticated ? <>
          <span className="user-chip">{user?.name || 'Engineer'}</span>
          <button className="btn btn-ghost small" onClick={handleLogout}>Logout</button>
        </> : <NavLink to="/login" className="btn btn-primary small">Sign in</NavLink>}
      </div>
    </div>
  </header>;
}
