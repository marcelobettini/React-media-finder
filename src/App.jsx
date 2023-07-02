/* 
luego de crear el custom hook para el fetching de datos, podemos traer a este componente el estado pues será corto, limpio y nos quedará en el padre de todo nuestro árbol de componentes. MediaList lo recibirá via props
*/
import { useMedia } from './hooks/useMedia';
import './App.css';
import Search from './components/Search';
import MediaList from "./components/MediaList";

function App() {
  const { data } = useMedia();
  return (
    <>
      <Search />
      <MediaList data={data} />

    </>
  );
}

export default App;
