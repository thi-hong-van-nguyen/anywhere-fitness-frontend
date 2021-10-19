import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <div className="App">

      <Header />

      <main id='main'>
        <Switch>
          <Route path='/home'>
            <Redirect to='/' />
          </Route>
          <Route path='/classes'>

          </Route>
          <Route path='/bookings'>

          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/logout'>

          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/' >
            <Home />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
