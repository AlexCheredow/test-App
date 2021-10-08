const CurrentlyPlaying = () => {
  return (
    <audio
      autoPlay="autoplay"
      controls="controls"
      src="http:\/\/hls.radiorecord.ru:8081\/rr\/rr\/playlist.m3u8"
    />
  );
};
export default CurrentlyPlaying;
