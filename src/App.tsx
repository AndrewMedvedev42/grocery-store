import { Routes, Route } from 'react-router-dom';
import NavigationMenu from "./components/NavigationMenu";
import './App.css';

function App() {
  return (
    <>
      <NavigationMenu/>
      <Routes>
        <Route path="/" element={<h1>hello</h1>}/>
      </Routes>
    </>
  );
}

export default App;
