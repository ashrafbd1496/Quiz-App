import classes from "./Miniplayer.module.css";
import VideoThumb from "../../assets/images/video-thumb.png";

export default function Miniplayer() {
  return (
    <div>
      <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
        <span className="material-icons-outlined open">play_circle_filled</span>
        <span className="material-icons-outlined close"> close </span>
        <img src={VideoThumb} alt="video thumb" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      </div>
    </div>
  );
}
