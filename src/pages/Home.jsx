import { Link } from 'react-router-dom';

export default function Home() {
  return <main>
    <section className="hero"><div className="container hero-grid">
      <div><span className="eyebrow">ENGINEERING • PEOPLE • KNOWLEDGE</span><h1>Meet the people<br/><span>building what’s next.</span></h1><p className="hero-copy">A focused internal directory for discovering developers, exploring their work, and sharing engineering knowledge.</p>
      <div className="hero-actions"><Link to="/users" className="btn btn-primary">Explore developers <span>→</span></Link><Link to="/add-post" className="btn btn-outline">Publish an update</Link></div></div>
      <div className="hero-art"><div className="code-window"><div className="window-bar"><i/><i/><i/></div><pre>{`const team = await\n  directory.discover({\n    skills: ['React', 'API'],\n    availability: 'now'\n  });\n\nteam.forEach(engineer =>\n  engineer.shareKnowledge()\n);`}</pre></div></div>
    </div></section>
    <section className="stats"><div className="container stats-grid"><div><strong>10</strong><span>Developers</span></div><div><strong>100%</strong><span>Discoverable</span></div><div><strong>24/7</strong><span>Knowledge sharing</span></div><div><strong>∞</strong><span>Ideas</span></div></div></section>
    <section className="home-section container"><div className="section-heading"><div><span className="eyebrow">QUICK ACCESS</span><h2>Find your next collaborator.</h2></div><Link to="/users" className="text-link">Browse directory →</Link></div><div className="feature-grid"><div className="feature"><span className="feature-icon">⌕</span><h3>Search people</h3><p>Filter the engineering directory instantly by developer name or company.</p></div><div className="feature"><span className="feature-icon">◈</span><h3>Inspect projects</h3><p>Open a profile to explore developer details and technical writeups.</p></div><div className="feature"><span className="feature-icon">✦</span><h3>Share knowledge</h3><p>Publish new internal articles through a protected authoring workspace.</p></div></div></section>
  </main>;
}
