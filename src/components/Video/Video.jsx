import videoThumb from "../../assets/images/video-thumb.png";
import classes from "./Video.module.css";
import { Link } from "react-router-dom";

export default function Video() {
  return (
    <Link to="/quiz">
      <div className={classes.video}>
        <img src={videoThumb} alt="Video Thumb" />
        <p>কুইজ করো পড়া শিখো </p>
        <div className={classes.qmeta}>
          <p>১০ টি প্রশ্ন </p>
          <p>স্কোর : (০) শুন্য </p>
        </div>
      </div>
    </Link>
  );
}
