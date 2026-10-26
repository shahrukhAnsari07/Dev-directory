import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SkeletonLoader from '../components/SkeletonLoader';
import AlertBanner from '../components/AlertBanner';
import { getUser, getUserPosts } from '../services/postService';

export default function UserProfile() {
  const { id } = useParams(); const [user, setUser] = useState(null), [posts, setPosts] = useState([]), [loading, setLoading] = useState(true), [error, setError] = useState('');
  const load = useCallback(async () => { setLoading(true); setError(''); try { const [u, p] = await Promise.all([getUser(id), getUserPosts(id)]); setUser(u.data); setPosts(p.data); } catch (e) { setError(e?.response?.status === 404 ? 'Developer not found.' : 'Unable to load this profile.'); } finally { setLoading(false); } }, [id]);
  useEffect(() => { load(); }, [load]);
  if (loading) return <main className="page"><div className="container"><SkeletonLoader count={3}/></div></main>;
  return <main className="page"><div className="container"><Link to="/users" className="back-link">← Back to directory</Link><AlertBanner message={error} onRetry={load} onDismiss={() => setError('')}/>{user && <>
    <section className="profile-card"><div className="avatar large">{user.name.split(' ').map(p=>p[0]).slice(0,2).join('')}</div><div className="profile-info"><span className="eyebrow">DEVELOPER PROFILE</span><h1>{user.name}</h1><p className="handle">@{user.username.toLowerCase()} · {user.company?.name}</p><div className="profile-details"><span>✉ {user.email}</span><span>☎ {user.phone}</span><span>🌐 {user.website}</span><span>📍 {user.address?.city}</span></div></div></section>
    <div className="section-heading profile-post-heading"><div><span className="eyebrow">TECHNICAL WRITES</span><h2>Published articles</h2></div><span className="post-count">{posts.length} posts</span></div>
    <div className="post-grid">{posts.length ? posts.map(post => <article className="post-card" key={post.id}><span className="post-tag">ENGINEERING NOTE</span><h3>{post.title}</h3><p>{post.body}</p><div className="post-footer"><span>#{post.id}</span><span>Read writeup →</span></div></article>) : <div className="empty-state"><h2>No articles yet</h2><p>This developer hasn’t published any writeups.</p></div>}</div>
  </>}</div></main>;
}
