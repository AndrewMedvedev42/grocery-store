import { Routes, Route } from 'react-router-dom';
import NavigationMenu from "./components/common/navigationMenu";
import { Main } from "./pages/main";
import { CatalogPage } from "./pages/catalog";
import { ProductPage } from "./pages/product";
import { NotAvailablePage } from "./pages/common/404";
import { Footer } from "./components/common/footer";

function App() {
  return (
    <article className="App">
      <NavigationMenu/>
      <article className="content">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/catalog" element={<CatalogPage/>}/>
          <Route path="/products/:name" element={<ProductPage/>}/>
          <Route path='*' element={<NotAvailablePage/>} />
        </Routes>
      </article>
      <Footer/>
    </article>
  );
}

export default App;
