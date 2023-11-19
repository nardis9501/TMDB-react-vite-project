export default function EarlyReturn({ children, isLoading, error, movies }) {
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
  if (movies && movies.length === 0) {
    return <p>No available at this time</p>;
  }
  return <>{children}</>;
}
