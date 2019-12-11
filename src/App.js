import React from 'react';
import {withRouter} from 'react-router-dom'; 
import './App.css';
import Nav from './Components/Nav/Nav'; 
import Post from './Components/Post/Post'; 
import Form from './Components/Form/Form'; 
import Dashboard from './Components/Dashboard/Dashboard'; 
import Auth from './Components/Auth/Auth'; 
import routes from './routes'; 

function App(props) {
  return (
    <div className="App">
    {props.location.pathname === '/' 
    ? (<>
        {routes}
      </>)
    : (<>
        <Nav />
        {routes}
      </>)}
  </div>
  );
}

export default withRouter(App);
