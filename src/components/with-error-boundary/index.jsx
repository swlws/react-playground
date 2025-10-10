import ErrorBoundary from './error-boundary';

export default function WithErrorBoundary(WrappedComponent, fallback) {
  return (props) => (
    <ErrorBoundary fallback={fallback}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
}
