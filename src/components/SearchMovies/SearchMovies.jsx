export default function SearchMovies({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.query.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="query" type="text" />
      <button>Search</button>
    </form>
  );
}
