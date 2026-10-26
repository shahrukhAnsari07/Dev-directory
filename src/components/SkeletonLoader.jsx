export default function SkeletonLoader({ count = 6 }) {
  return <div className="skeleton-grid" aria-label="Loading">
    {Array.from({ length: count }, (_, i) => <div className="skeleton-card" key={i}>
      <div className="skeleton skeleton-avatar"/><div className="skeleton skeleton-line wide"/><div className="skeleton skeleton-line"/><div className="skeleton skeleton-line short"/>
    </div>)}
  </div>;
}
