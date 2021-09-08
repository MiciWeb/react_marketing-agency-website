import React from "react"
import { Navbar, Footer } from "./components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import GlobalStyle from "./globalStyles"
import Home from "./pages/HomePage/Home"
import Services from "./pages/Services/Services"
import Products from "./pages/Products/Products"
import SignUp from "./pages/SignUp/SignUp"
import ScrollToTop from "./components/ScrollToTop"
import { Redirect } from 'react-router';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Route exact path="/react_marketing-agency-website">
         <Redirect to="/" />
      </Route>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/services" exact={true} component={Services} />
        <Route path="/products" exact={true} component={Products} />
        <Route path="/sign-up" exact={true} component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;