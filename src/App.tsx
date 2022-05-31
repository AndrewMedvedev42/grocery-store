import { Routes, Route } from 'react-router-dom';
import NavigationMenu from "./components/NavigationMenu";
import { Main } from "./pages/Main";
import { ProductPage } from "./pages/Product";
import { NotAvailablePage } from "./pages/common/404";
import { Footer } from "./components/Footer";

function App() {
  return (
    <article className="App">
      <NavigationMenu/>
      <article className="content">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/products/:name" element={<ProductPage/>}/>
          <Route path='*' element={<NotAvailablePage/>} />
        </Routes>
      </article>
      <Footer/>
    </article>
  );
}

export default App;
