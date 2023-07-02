import { useRef } from "react";

function Search() {
  const inputTitle = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputTitle.current.value);


  };
  return (
    <header className="header">
      <h1>Awesome Media Finder</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie">Media: </label>
        <input ref={inputTitle} type="search" name="movie" id="movie" placeholder='The title of a movie, serie, game...' title='Type in a movie title and click on "search" button' />
        <input type="submit" value="search" />
      </form>
    </header>
  );
}

export default Search;