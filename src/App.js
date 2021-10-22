import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Classes from './components/Classes'
import Bookings from './components/Bookings'
import Logout from './components/Logout'
import { loginStatus } from './actions'

function App(props) {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      props.loginStatus(true)
    } else {
      props.loginStatus(false)
    }
  }, [])

  console.log('app renders')

  return (
    <div className="App">

      <Header />

      <main id='main'>
        <Switch>
          <Route path='/classes' component={Classes} />
          <Route path='/bookings'>
            <Bookings />
          </Route>
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/signup' component={Signup} />
          <Route path='/' component={Home} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}




export default connect(null, { loginStatus })(App);
