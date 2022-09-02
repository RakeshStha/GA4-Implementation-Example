import { Link, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import {Home, Contact, About} from "./components/pages"

ReactGA.initialize(`${process.env.REACT_APP_GA4_ID}`);

function App() {
  const location = useLocation()
  const active = location.pathname
  console.log("@data", location.pathname)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-2" href="#">
          GA4 Implementation
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className={`nav-item ${active === "/" ? "activeNav" : null}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={`nav-item ${active === "/about" ? "activeNav" : null}`}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className={`nav-item ${active === "/contact-us" ? "activeNav" : null}`}>
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <div className="container-fluid bg-dark m-0 p-0">
        <footer className="p-3 d-flex justify-content-center align-items-center">
          <p className="text-center text-white p-0 m-0">© 2022 GA4 Implementation</p>
        </footer>
      </div>
    </>
  );
}

export default App;
