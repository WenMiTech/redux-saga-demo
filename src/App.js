import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import "./mock";
import Axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
  componentDidMount() {
    Axios.get('/api/test').then(res => {
      console.log(res);
    })
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}



export default App;
