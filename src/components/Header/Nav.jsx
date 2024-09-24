// import { Link } from 'react-router-dom';
import classes from './Nav.module.css';
import logo from '../../assets/images/quiz-logo.svg';
import Account from './Account';


export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            {/* <img src={logo} alt="Brand Logo" /> */}
            <h3>কুইজ করো</h3>
          </a>
        </li>
      </ul>
    <Account />
    </nav>
  );
}
