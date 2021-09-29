import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import history from "./history"

import Header from "./components/Header"
import Home from "./pages/Homepage"
import CountryDetail from "./pages/CountryDetailPage"

function App() {
  return (
    <div className='bg-light_bg font-nunito h-screen'>
      <Header />
      <div className='p-10'>
        <Router history={history}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route
              path='/country/details/:code'
              exact
              component={CountryDetail}
            />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
