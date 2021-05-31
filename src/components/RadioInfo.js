import React, { Component } from "react";
export default class RadioInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stationName: null,
    };
  }
  componentDidMount() {
    fetch("https://www.radiorecord.ru/radioapi/stations/")
      .then((res) => res.json())
      .then(
        (data) => {
          const { result } = data;
          const station = result.find((r) => r.prefix === "lofi");
          const { prefix } = station;
          this.setState({
            isLoaded: true,
            stationName: prefix,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, stationName } = this.state;
    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading</p>;
    } else {
      return <div className="Name">radio: {stationName}</div>;
    }
  }
}
