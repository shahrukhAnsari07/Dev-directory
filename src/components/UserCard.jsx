import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  const initials = user.name.split(' ').map(p => p[0]).slice(0, 2).join('');
  return <article className="user-card">
    <div className="avatar">{initials}</div>
    <div className="card-body">
      <div className="card-title-row"><h3>{user.name}</h3><span className="status-dot" title="Available" /></div>
      <p className="handle">@{user.username.toLowerCase()}</p>
      <p className="company">{user.company?.name}</p>
      <div className="card-meta"><span>📍 {user.address?.city}</span><span>✉ {user.email}</span></div>
      <Link className="card-link" to={`/users/${user.id}`}>View profile <span>→</span></Link>
    </div>
  </article>;
}
