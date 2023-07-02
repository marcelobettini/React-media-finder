import PropTypes from "prop-types";
function Media({ media }) {
  return (
    <article className="media-card">
      <h3>{media.title}</h3>
      <p>{media.year}</p>
      <img src={media.poster} alt={media.title} />
    </article>
  );
}

Media.propTypes = {
  media: PropTypes.shape(
    {
      title: PropTypes.string,
      year: PropTypes.string,
      id: PropTypes.string,
      type: PropTypes.string,
      poster: PropTypes.string
    }
  )

};

export default Media;