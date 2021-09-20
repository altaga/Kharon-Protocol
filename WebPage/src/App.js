// Basic
import { Component } from "react";

// Router
import {
  Router,
  Route,
  Switch
} from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Pages
import Main from "./pages/main";
import Landing from './pages/landing';
import history from "./utils/history";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/app/:id" component={Main} />
            <Route path="*" component={Main} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
