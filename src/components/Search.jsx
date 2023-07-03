import { useRef } from "react";
import PropTypes from "prop-types";

function Search({ onChangeQuery, sort, onSort }) {
  console.log(console.count("Search"));
  const inputTitle = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeQuery(inputTitle.current.value.trim());
    inputTitle.current.value = "";
  };

  const handleChangeQuery = (query) => {
    onChangeQuery(query);
  };

  /* DEBOUNCING
  1- debounce is the main debouncing function
  2- handleChangeQuery is the function that changes de query's state, whose execution we need to delayin order to avoid a request per keystroke
  3- debouncedHandleInputChange equals to calling debounce with handleChangeQuery as it's callback. This debouncedHandleInputChange must be called in the search input onChange event with input's value.
  */
  function debounce(cb, _timeout = 250) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { cb(...args); }, _timeout);
    };
  }
  const debouncedHandleInputChange = debounce(handleChangeQuery, 500);

  return (
    <header className="header">
      <h1>Awesome Media Finder</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="media">Media: </label>
        <input ref={inputTitle} type="search" name="media" id="media" placeholder='Title of a movie, tv show or game...' title='Type in a movie title and click on "search" button' required onInvalid={(e) => e.target.setCustomValidity('Must enter at least three characters to search...')} onInput={(e) => e.target.setCustomValidity('')} minLength={3} onChange={(e) => debouncedHandleInputChange(e.target.value)} />
        <input type="submit" value="search" />
        <input type="checkbox" onChange={onSort} checked={sort} />
      </form>
    </header>
  );
}

Search.propTypes = {
  onChangeQuery: PropTypes.func,
  onSort: PropTypes.func,
  sort: PropTypes.bool,
};

export default Search;