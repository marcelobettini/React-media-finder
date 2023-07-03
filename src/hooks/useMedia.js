import { useEffect, useState } from "react";
const BASE_URL = "https://www.omdbapi.com/?apikey=";
const API_KEY = "4287ad07&";
export function useMedia(query, sort) {
  console.count("custom hook");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isQuery = !!query;

  useEffect(() => {
    const getMedia = () => {
      fetch(`${BASE_URL}${API_KEY}s=${query}`)
        .then(res => {
          if (!res.ok) throw new Error();
          return res.json();
        })
        .then(data => {
          const shapedData = data?.Search.map(m => ({
            id: m.imdbID,
            title: m.Title,
            year: m.Year,
            poster: m.Poster,
            type: m.Type,
          }));
          if (!sort) {
            setData(shapedData);
          } else {
            const sortedData = [...shapedData].sort((a, b) =>
              a.title.localeCompare(b.title)
            );
            setData(sortedData);
          }
          setError(false);
        })
        .catch(err => {
          console.error(err);
          setError(true);
        })
        .finally(setIsLoading(false));
    };
    if (query) {
      getMedia(query);
    }
  }, [query, sort]);

  return { data, error, isLoading, isQuery };
}
