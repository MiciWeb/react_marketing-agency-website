import React from "react"
import { Navbar } from "./components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import GlobalStyle from "./globalStyles"
import Home from "./components/Home/Home"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/login" exact={true} component={Login} />
      </Switch>
    </Router>
  )
}

export default App;