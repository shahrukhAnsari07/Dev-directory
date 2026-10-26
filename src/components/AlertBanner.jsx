export default function AlertBanner({ message, onRetry, onDismiss }) {
  if (!message) return null;
  return <div className="alert error" role="alert">
    <span className="alert-icon">!</span><div><strong>Something went wrong</strong><p>{message}</p></div>
    <div className="alert-actions">{onRetry && <button onClick={onRetry} className="btn btn-danger">Retry</button>}{onDismiss && <button onClick={onDismiss} className="alert-close" aria-label="Dismiss">×</button>}</div>
  </div>;
}
