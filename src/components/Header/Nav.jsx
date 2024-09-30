// import { Link } from 'react-router-dom';
import classes from './Nav.module.css';
import logo from '../../assets/images/logo/quiz-logo.svg';
import Account from './Account';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Brand Logo" />
            {/* <h3>কুইজ করো</h3> */}
          </Link>
        </li>
      </ul>
    <Account />
    </nav>
  );
}
