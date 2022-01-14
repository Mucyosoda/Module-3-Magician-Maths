import { Switch, Route } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Header from './Components/header';
import Quote from './Components/quotePage';
import Welcome from './Components/welcome';

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
