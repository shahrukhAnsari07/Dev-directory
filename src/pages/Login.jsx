import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [name, setName] = useState('Engineering Manager'); const [email, setEmail] = useState('manager@devdirectory.local'); const [error, setError] = useState(''); const { login } = useAuth(); const navigate = useNavigate(); const location = useLocation();
  const from = location.state?.from?.pathname ? `${location.state.from.pathname}${location.state.from.search || ''}` : '/';
  const submit = e => { e.preventDefault(); if (!name.trim() || !email.trim()) return setError('Please enter your name and email.'); login({ name: name.trim(), email: email.trim() }); navigate(from, { replace: true }); };
  return <main className="auth-page"><div className="auth-card"><div className="auth-icon">&lt;/&gt;</div><span className="eyebrow">PROTECTED SESSION</span><h1>Welcome back.</h1><p>Sign in to publish engineering updates and internal documentation.</p><form onSubmit={submit}><label>Display name<input value={name} onChange={e=>setName(e.target.value)} required/></label><label>Work email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label>{error && <div className="inline-error">{error}</div>}<button className="btn btn-primary full">Sign in securely →</button></form><small>Demo authentication · no real credentials are transmitted.</small></div></main>;
}
