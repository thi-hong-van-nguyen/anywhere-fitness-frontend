import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './components/Home'

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

          </Route>
          <Route path='/logout'>

          </Route>
          <Route path='/signup'>

          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
