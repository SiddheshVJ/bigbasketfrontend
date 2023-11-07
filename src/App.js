import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ProductLists from './components/Products/ProductLists'
import ProductAdmin from './components/Products/ProductAdmin'
import CreateProduct from './components/Products/CreateProduct'
import UpdateProduct from './components/Products/UpdateProduct'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/product/list" Component={ProductLists} />
          <Route exact path="//product/admin" Component={ProductAdmin} />
          <Route exact path="/product/create" Component={CreateProduct} />
          <Route exact path="/product/:id" Component={UpdateProduct} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
