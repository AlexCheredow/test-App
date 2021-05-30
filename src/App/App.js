import React from "react";
import CurrentlyPlaying from "../components/CurrentlyPlaying";

import styles from "./App.css";
function App() {
  return (
    <div className={styles.div}>
      <CurrentlyPlaying className={styles.audio} />
    </div>
  );
}
export default App;
