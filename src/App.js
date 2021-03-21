import {BrowserRouter, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Laptops from "./components/Laptops";
import NuevaLaptop from "./components/NuevaLaptop";

import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/laptops' component={Laptops} />
              <Route exact path='/laptops/nueva' component={NuevaLaptop} />
            </Switch>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
