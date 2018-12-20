import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// 01 Object Destructuring

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">
        Navbar &nbsp;
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink to="/" className="nav-item nav-link">
            Home
          </NavLink>

          <NavLink to="/buttons" className="nav-item nav-link">
            Buttons
          </NavLink>

          <NavLink to="/alerts" className="nav-item nav-link">
            Alerts
          </NavLink>

          <NavLink to="/modals" className="nav-item nav-link ">
            Modals
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

// 02 Stateless Functional Component

// const NavBar = props => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar
//         <span className="badge badge-pill badge-secondary">
//           {props.totalCounters}
//         </span>
//       </a>
//     </nav>
//   );
// };

// 03 Using Class Components

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
