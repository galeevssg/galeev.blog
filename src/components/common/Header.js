import React from "react";
import { Link } from "gatsby";
import logo from "../../img/logo.png";
import * as classes from "./header.module.scss";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "active",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav className={classes.Nav} role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="d-flex justify-content-space-between align-items-center">
          <div className="d-flex align-items-center" style={{ "--py": "20px" }}>
            <div
              className={classes.navbarBrand}
              style={{ "--me": "32px", "--pe": "32px" }}
            >
              <Link to="/" title="Logo">
                <img src={logo} alt="Galeev" style={{ "--height": "32px" }} />
              </Link>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <Link className={`button-2 ${classes.navbarItem}`} to="/">
                Главная
              </Link>
              <Link className={`button-2 ${classes.navbarItem}`} to="/about">
                Обо мне
              </Link>
              <Link className={`button-2 ${classes.navbarItem}`} to="/catalog">
                Каталог
              </Link>
              <Link className={`button-2 ${classes.navbarItem}`} to="/products">
                FAQ
              </Link>
              {/* <Link className={`button-2 ${classes.navbarItem}`} to="/contact">
                Contact
              </Link>
              <Link
                className={`button-2 ${classes.navbarItem}`}
                to="/contact/examples"
              >
                Form Examples
              </Link> */}
            </div>
          </div>
          <div>
            <button className="btn btn-default">Contact</button>
          </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
