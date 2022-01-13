import ProductContainer from "./ProductContainer";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import ProductForm from "./ProductForm";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
        <Switch>
          <Route path="/products/new">
            <ProductForm />
          </Route>
          <Route path="/products">
            <ProductContainer />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
