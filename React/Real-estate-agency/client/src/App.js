import Layout from './components/layout/Layout/Layout';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
