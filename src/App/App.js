import React from "react";
import CurrentlyPlaying from "../components/CurrentlyPlaying";
// import Bcgrnd from "../img/relax.gif";

import styles from "./App.css";
function App() {
  return (
    <div
      className={styles.div}
      // style={{
      //   backgroundImage: "url(" + Bcgrnd + ")",
      //   width: "100%",
      //   height: "500px",
      // }}
    >
      <CurrentlyPlaying className={styles.audio} />
    </div>
  );
}
export default App;
