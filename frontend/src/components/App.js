import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import ListBooks from "./pages/ListBooks";
import Header from "./organism/Header/Header";
import Footer from "./organism/Footer/Footer";
import "../stylesheets/core/_reset.scss";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={CreateBook} />
          <Route path="/bookmarks" component={ListBooks} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
