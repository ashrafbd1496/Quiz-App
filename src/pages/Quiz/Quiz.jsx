import classes from "./Quiz.module.css";
import Answers from "../../components/Quiz/Answers";
import Progressbar from "../../components/Quiz/Progressbar";
import Miniplayer from "../../components/Quiz/Miniplayer";

export default function Quiz() {
  return (
    <div>
      <h2 className={classes.qHeading}>Pick three of your favorite Star Wars Flims</h2>
      <h4 className={classes.qSubHeading}>প্রশ্নের সঠিক উত্তর একাধিক হতে পারে</h4>
      <Answers />
      <Progressbar />
      <Miniplayer />
    </div>
  );
}
