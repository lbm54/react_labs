import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Films from "./Films";
import People from "./People";
import Film from "./Film";
import Person from "./Person";

const NavRouter = props => {
  return (
    <Router>
      <Fragment>
        <nav className="navbar navbar-light bg-light">
          <Link to="/films">Films</Link>
          <Link to="/people">People</Link>
          <Link to="/">Home</Link>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/people" component={People} />
          <Route path="/film/:id" component={Film} />
          <Route path="/person/:id" component={Person} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default NavRouter;
