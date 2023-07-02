import responseWithData from "../data/responseWithData.json";
import responseEmpty from '../data/responseEmpty.json';
// import responseEmpty from "../data/responseEmpty.json";
import Media from "./Media";

import PropTypes from 'prop-types';
function MediaList() {
  const data = responseWithData.Search;
  // const data = responseEmpty;


  if (data.Error) return <h3>No media here...</h3>;
  return data.length && (
    <section className="media-container">
      {data.map(m => <Media key={m.imdbID} media={m} />)}
    </section>
  );
}
MediaList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(
      {
        Title: PropTypes.string,
        Year: PropTypes.string,
        imdbID: PropTypes.string,
        Type: PropTypes.string,
        Poster: PropTypes.string
      }
    ))
};

export default MediaList;

