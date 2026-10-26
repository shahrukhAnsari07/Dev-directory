import { Link } from 'react-router-dom';
export default function NotFound(){ return <main className="not-found"><div><span className="eyebrow">ERROR 404</span><div className="four">404</div><h1>Lost in the directory.</h1><p>The page you’re looking for doesn’t exist or has moved.</p><Link to="/" className="btn btn-primary">Back home →</Link></div></main>; }
