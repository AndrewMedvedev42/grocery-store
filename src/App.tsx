import { Routes, Route } from 'react-router-dom';
import NavigationMenu from "./components/NavigationMenu";
import { Main } from "./pages/Main";
import './styles/App.css';

function App() {
  return (
    <>
      <NavigationMenu/>
      <article style={{paddingTop:66}}>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </article>
    </>
  );
}

export default App;
