import videoThumb from "/assets/images/video-thumb.png";
import classes from "./styles/Video.module.css";

export default function Video() {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img src={videoThumb} alt="Video Thumb" />
        <p>কুইজ করো পড়া শিখো </p>
        <div className={classes.qmeta}>
          <p>১০ টি প্রশ্ন </p>
          <p>স্কোর : এখনো কোন স্কোর হয়নি </p>
        </div>
      </div>
    </a>
  );
}
