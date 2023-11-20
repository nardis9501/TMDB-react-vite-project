export default function EarlyReturn({ children, isLoading, error, data }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <p>
        An unexpected error has occurred, please check your internet connection.
      </p>
    );
  }
  if (data && data.length === 0) {
    return <p>No available at this time</p>;
  }
  return <>{children}</>;
}
