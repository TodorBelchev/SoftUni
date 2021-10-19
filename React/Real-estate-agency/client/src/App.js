import Layout from './components/layout/Layout/Layout';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';

import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
