import './App.css';
import { useState } from 'react';
import ProductDetails from './productDetails';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Product from './product';
import NotFoundPage from './notFoundPage';

const defaultProducts = [
  {
      name: 'HP Probook',
      description: 'HP Probook 450',
      price: '55,000',
      category: 'Laptop',
  },
  {
      name: 'Apacer AH360',
      description: 'Apacer AH360 32GB',
      price: '700',
      category: 'Pendrive',
  },
  {
      name: 'Samsung',
      description: 'Samsung S20 128GB',
      price: '78,000',
      category: 'Mobile',
  },
  {
    name: 'TITAN',
    description: 'TITAN NM1701QL01',
    price: '7,690',
    category: 'Watch',
  }
];

function App() {
  const [products, setProduct] = useState(defaultProducts);

  return (
    <div className="App">
        
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/productDetails">Product Details</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
              <Product data={products}/>
          </Route>
          <Route exact path="/productDetails/:index_number">
            <ProductDetails data={products}/>
          </Route>
          <Route exact path="/404">
            <NotFoundPage/>
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    
    </Router>
    </div>
  );
}

export default App;
