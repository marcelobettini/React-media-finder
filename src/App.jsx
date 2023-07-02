/* 
luego de crear el custom hook para el fetching de datos, podemos traer a este componente el estado pues será corto, limpio y nos quedará en el padre de todo nuestro árbol de componentes. MediaList lo recibirá via props. Ojo, en MediaList habrá que agregar isLoading y error a las PropTypes
*/
import { useState } from 'react';
import { useMedia } from './hooks/useMedia';
import './App.css';
import Search from './components/Search';
import MediaList from "./components/MediaList";

function App() {
  const [query, setQuery] = useState("");
  const { data, error, isLoading } = useMedia(query);
  const handleQuery = (text) => {
    setQuery(text);

  };
  return (
    <>
      <Search onChangeQuery={(text) => handleQuery(text)} />

      <MediaList data={data} error={error} isLoading={isLoading} />

    </>
  );
}

export default App;
