import Account from "./Accounts";
import classes from "./styles/Nav.module.css";
import logo from "/assets/images/quiz-logo.png";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Brand Logo" />
            {/* <h3>Quiz App</h3> */}
          </a>
        </li>
      </ul>
    <Account />
    </nav>
  );
}
