import PropTypes from "prop-types";
function Media({ media }) {
  return (
    <article className="media-card">
      <h3>{media.Title}</h3>
      <p>{media.Year}</p>
      <img src={media.Poster} alt={media.Title} />
    </article>
  );
}

Media.propTypes = {
  media: PropTypes.shape(
    {
      Title: PropTypes.string,
      Year: PropTypes.string,
      imdbID: PropTypes.string,
      Type: PropTypes.string,
      Poster: PropTypes.string
    }
  )

};

export default Media;