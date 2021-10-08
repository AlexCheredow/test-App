const CurrentlyPlaying = () => {
  return (
    <audio
      autoPlay="autoplay"
      controls="controls"
      src="https://hls-01-radiorecord.hostingradio.ru/record/96/playlist.m3u8"
    />
  );
};
export default CurrentlyPlaying;
