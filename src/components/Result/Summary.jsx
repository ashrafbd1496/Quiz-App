import classes from "./Summary.module.css";
import summaryImage from "../../assets/images/scored.png";

export default function Summary() {
  return (
    <div>
      <div className={classes.summary}>
        <div className={classes.point}>
          {/* progress bar will be placed here*/}
          <p className={classes.score}>
          আপনি ১০ টি প্রশ্নের মধ্যে <br /> ৫ টির সঠিক উত্তর দিয়েছেন 
          </p>
        </div>

        <div className={classes.badge}>
          <img src={summaryImage} alt="Success" />
        </div>
      </div>
    </div>
  );
}
