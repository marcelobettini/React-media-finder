import PropTypes from 'prop-types';
import Media from './Media';
function MediaList({ data }) {
  /*
  Toda esta lógica de "data fetching" la vamos a extraer a un custom hook, para no tener esa lógica dentro del componente. Con esto logramos mayor abstracción, reutilización y legibilidad.
Y una vez que lo hagamos, podríamos incluso utilizarlo en App y el estado nos quedará en el componente padre...
Y aquí lo recibimos por props (como se ve ahora)

  const data = responseWithData.Search;
  const shapedData = data.map(m => ({
    id: m.imdbID,
    title: m.Title,
    year: m.Year,
    poster: m.Poster,
    type: m.Type
  })
  );
*/
  if (!data.length) return <h3>No media here...</h3>;

  return data.length && (
    <section className="media-container">
      {data.map(m => <Media key={m.id} media={m} />)}
    </section>
  );
}
MediaList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string,
        year: PropTypes.string,
        id: PropTypes.string,
        type: PropTypes.string,
        poster: PropTypes.string
      }
    ))
};

export default MediaList;

