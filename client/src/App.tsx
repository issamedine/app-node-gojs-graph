import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import View from './View'
import Success from './Success'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <View {...props} />}
          />
          <Route
            exact
            path="/success"
            component={Success}
          />
          <Route
            render={()=> <div>fuck the monde what is the fucking router man</div>}
          />
        </Switch>
      </Router>
    </>
  )
}

export default App

