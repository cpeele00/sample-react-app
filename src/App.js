import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MarvelLogo from './styles/img/marvel-logo.png';


function App() {

  const Movies = lazy(() => import(/* webpackChunkName: "Movies" */ './features/movies/Movies'));
  const About = lazy(() => import(/* webpackChunkName: "About" */ './features/about/About'));

  return (
    <Router>
      <div className="sample-app">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top"
          style={{ backgroundColor: '#1a1a1a', padding: 15, boxSizing: 'border-box' }}>
          <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <img id="logo" src={MarvelLogo} height="50" alt="logo" />

            <div className="w-100 text-right">
              <button id="ascribe-nav-toggle" className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#ascribe-navbar">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div className="collapse navbar-collapse flex-grow-1 text-right" id="ascribe-navbar">
            <ul className="navbar-nav flex-nowrap l-top-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link menu-item nav-active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/movies" className="nav-link menu-item">Movies</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link menu-item">About</Link>
              </li>
            </ul>
          </div>
        </nav>

        <header>
          <div className="drop-shadow"></div>
        </header>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Suspense fallback={<h3>Loading...</h3>}>
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Movies} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
