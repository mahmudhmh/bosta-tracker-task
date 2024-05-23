import track from "../assets/track.gif";
import "../styles/loading.css";

export default function Loading() {
  return (
    <div className="loading">
      <img src={track} alt="trackGif" />
    </div>
  );
}
