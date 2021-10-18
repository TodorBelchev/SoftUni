import Layout from './components/layout/Layout/Layout';

import './App.css';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <p>It works</p>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
