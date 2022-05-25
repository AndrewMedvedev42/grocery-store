import { Routes, Route } from 'react-router-dom';
import NavigationMenu from "./components/NavigationMenu";
import { Main } from "./pages/Main";
import { NotAvailablePage } from "./pages/common/404";
import { Footer } from "./components/Footer";
import './styles/App.css';

function App() {
  return (
    <article className="App">
      <NavigationMenu/>
      <article className="content">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path='*' element={<NotAvailablePage/>} />
        </Routes>
      </article>
      <Footer/>
    </article>
  );
}

export default App;
