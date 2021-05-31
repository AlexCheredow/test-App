import React from "react";
import CurrentlyPlaying from "../components/CurrentlyPlaying";
import RadioInfo from "../components/RadioInfo";
import ArtistSongInfo from "../components/ArtisSongInfo";

import "./App.css";
function App() {
  return (
    <div className="cart">
      <CurrentlyPlaying />
      <RadioInfo />
      <ArtistSongInfo />
    </div>
  );
}
export default App;
