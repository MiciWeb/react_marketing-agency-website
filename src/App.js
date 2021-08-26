import React from "react"
import { Navbar, Footer } from "./components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import GlobalStyle from "./globalStyles"
import Home from "./pages/HomePage/Home"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/services" exact={true} component={Services} />
        <Route path="/products" exact={true} component={Produts} />
        <Route path="/sign-up" exact={true} component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;