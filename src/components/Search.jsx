import { useRef } from "react";
import PropTypes from "prop-types";

function Search({ onChangeQuery }) {
  console.log(console.count("Search"));
  const inputTitle = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeQuery(inputTitle.current.value);


  };
  return (
    <header className="header">
      <h1>Awesome Media Finder</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="media">Media: </label>
        <input ref={inputTitle} type="search" name="media" id="media" placeholder='Title of a movie, tv show or game...' title='Type in a movie title and click on "search" button' required onInvalid={(e) => e.target.setCustomValidity('Must enter a title to search...')} onInput={(e) => e.target.setCustomValidity('')} />
        <input type="submit" value="search" />
      </form>
    </header>
  );
}

Search.propTypes = {
  onChangeQuery: PropTypes.func
};

export default Search;