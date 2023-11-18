export default function EarlyReturn({ isLoading, error, movies }) {
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
  if (movies.length === 0) {
    return <p>No movies available at this time</p>;
  }
}
