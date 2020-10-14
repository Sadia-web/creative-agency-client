import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import OrderForm from './Components/ManageOrder/OrderForm/OrderForm';
import PostReview from './Components/PostReview/PostReview';
import ServiceList from './Components/ManageOrder/ServiceList/ServiceList';
import Admin from './Components/Admin/Admin/Admin';
import AddService from './Components/Admin/AddService/AddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import { useState } from 'react';
import NoMatch from './Components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login" >
              <Login></Login>
            </Route>

            <Route path="/orderForm" >
              <OrderForm></OrderForm>
            </Route>

            <Route path="/serviceList" >
              <ServiceList></ServiceList>
            </Route>

            <Route path="/postReview" >
              <PostReview></PostReview>
            </Route>

            <Route path="/admin" >
              <Admin></Admin>
            </Route>

            <Route path="/addService" >
              <AddService></AddService>
            </Route>

            <Route path="/makeAdmin" >
              <MakeAdmin></MakeAdmin>
            </Route>

            <PrivateRoute path="/dashboard" >
              <Dashboard></Dashboard>
            </PrivateRoute>

        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
   
  );
}

export default App;
