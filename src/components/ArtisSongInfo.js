import React, { Component } from "react";
export default class ArtistSongInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      artist: null,
      song: null,
    };
  }
  intervalId = null;

  async componentDidMount() {
    await this.fetchData();
    this.intervalId = setInterval(() => {
      this.fetchData();
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  fetchData = async () => {
    fetch("https://www.radiorecord.ru/radioapi/stations/")
      .then((res) => res.json())
      .then(
        (data) => {
          const { result } = data;
          const station = result.find((r) => r.prefix === "rr");
          const { artist, song } = station;
          this.setState({
            isLoaded: true,
            artist,
            song,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };
  render() {
    const { error, isLoaded, song, artist } = this.state;
    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading</p>;
    } else {
      return (
        <div>
          <div className="Name">artist: {artist}</div>
          <div className="Name">song: {song}</div>
        </div>
      );
    }
  }
}
