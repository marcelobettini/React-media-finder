import PropTypes from 'prop-types';
import Media from './Media';
function MediaList({ data, error, isLoading }) {
  console.count("Media List");
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
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>No hay resultados...</h3>;

  return data && (
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
    )),
  error: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default MediaList;

