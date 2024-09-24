import Nav from "../Header/Nav";
import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>
          {children ? children : <p>No content available</p>}
        </div>
      </main>
    </div>
  );
}
