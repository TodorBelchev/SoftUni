import Layout from './components/layout/Layout/Layout';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';

import './App.css';
import Listings from './pages/Listings';


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
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/create-offer">
          <Create></Create>
        </Route>
        <Route path="/listings">
          <Listings></Listings>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
