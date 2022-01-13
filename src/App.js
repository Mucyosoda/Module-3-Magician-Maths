import { Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/header';
import Quote from './components/quotePage';
import Welcome from './components/welcome';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>
  </>
);

export default App;
