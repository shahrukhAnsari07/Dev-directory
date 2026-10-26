import { useCallback, useEffect, useMemo, useState } from 'react';
import UserCard from '../components/UserCard';
import SkeletonLoader from '../components/SkeletonLoader';
import AlertBanner from '../components/AlertBanner';
import useDebounce from '../hooks/useDebounce';
import { getUsers } from '../services/postService';

export default function UserDirectory() {
  const [users, setUsers] = useState([]), [query, setQuery] = useState(''), [loading, setLoading] = useState(true), [error, setError] = useState('');
  const debouncedQuery = useDebounce(query);
  const loadUsers = useCallback(async () => { setLoading(true); setError(''); try { const { data } = await getUsers(); setUsers(data); } catch (e) { setError(e?.message || 'Unable to load the developer directory.'); } finally { setLoading(false); } }, []);
  useEffect(() => { loadUsers(); }, [loadUsers]);
  const filtered = useMemo(() => { const q = debouncedQuery.trim().toLowerCase(); if (!q) return users; return users.filter(u => u.name.toLowerCase().includes(q) || u.company?.name.toLowerCase().includes(q)); }, [users, debouncedQuery]);
  return <main className="page"><div className="container">
    <div className="page-heading"><div><span className="eyebrow">DIRECTORY</span><h1>Engineering team</h1><p>Discover developers and explore what they’re building.</p></div><div className="directory-count"><strong>{filtered.length}</strong><span>matches</span></div></div>
    <div className="search-wrap"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by name or company…" aria-label="Search developers"/>{query && <button onClick={() => setQuery('')} aria-label="Clear search">×</button>}</div>
    <AlertBanner message={error} onRetry={loadUsers} onDismiss={() => setError('')} />
    {loading ? <SkeletonLoader/> : filtered.length ? <div className="user-grid">{filtered.map(user => <UserCard key={user.id} user={user}/>)}</div> : <div className="empty-state"><div>⌕</div><h2>No developers found</h2><p>Try a different name or company.</p></div>}
  </div></main>;
}
