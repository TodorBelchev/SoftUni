import Layout from './components/layout/Layout/Layout';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';

import './App.css';
import Listings from './pages/Listings';
import Details from './pages/Details';
import Edit from './pages/Edit';


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
        <Route path="/:id/details">
          <Details></Details>
        </Route>
        <Route path="/:id/edit">
          <Edit></Edit>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
