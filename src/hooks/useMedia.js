import responseWithData from "../data/responseWithData.json";

export function useMedia() {
  const data = responseWithData.Search;
  const shapedData = data.map(m => ({
    id: m.imdbID,
    title: m.Title,
    year: m.Year,
    poster: m.Poster,
    type: m.Type,
  }));
  return { data: shapedData };
}
