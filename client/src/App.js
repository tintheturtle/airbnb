import React, { Component }from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import RegisterHost from './components/RegisterHost'
import ProfileHost from './components/ProfileHost'
import LoginHost from './components/LoginHost'
import List from './components/List'
import Checkout from './components/Checkout'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/register_host" component={RegisterHost}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/login_host" component={LoginHost}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/profile_host" component={ProfileHost}/>
          <Route exact path="/tasks" component={List}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Footer/>

          
        </div>
      </Router>
    );
  }
} 

export default App;
