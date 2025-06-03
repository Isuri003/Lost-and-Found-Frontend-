// src/components/ProtectedRoute.tsx
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // Just render children without checking auth
  return <>{children}</>;
};

export default ProtectedRoute;
