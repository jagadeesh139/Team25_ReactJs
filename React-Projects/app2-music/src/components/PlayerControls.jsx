import React, { useContext, useEffect, useRef, useState } from "react";
import { MusicContext } from "./MusicContext";

export default function PlayerControls() {
  const { state, dispatch } = useContext(MusicContext);
  const audioRef = useRef(null);
  const index = state.tracks.findIndex((t) => t.id === state.currentTrack?.id);
  const [volume, setVolume] = useState(1);
  const [loop, setLoop] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const next = () => {
    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * state.tracks.length);
      dispatch({ type: "PLAY_TRACK", payload: state.tracks[randomIndex] });
    } else if (index >= 0 && index < state.tracks.length - 1) {
      dispatch({ type: "PLAY_TRACK", payload: state.tracks[index + 1] });
    }
  };

  const prev = () => {
    if (index > 0) {
      dispatch({ type: "PLAY_TRACK", payload: state.tracks[index - 1] });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && state.currentTrack?.url) {
      audio.load();
      audio.play();
    }
  }, [state.currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="player-controls">
      <div className="player-bar">
        <button onClick={prev}>⏮️</button>
        <button onClick={togglePlay}>⏯️</button>
        <button onClick={next}>⏭️</button>
      </div>
      <div>
        {state.currentTrack ? `${state.currentTrack.title} - ${state.currentTrack.artist}` : "No track playing"}
      </div>
      {state.currentTrack && (
        <>
          <audio
            ref={audioRef}
            controls
            className="audio-element"
            loop={loop}
            onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
            onLoadedMetadata={() => setDuration(audioRef.current.duration)}
            onEnded={() => !loop && next()}
          >
            <source src={state.currentTrack.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <span>⏱️ {Math.floor(currentTime)} / {Math.floor(duration)}s</span>
            <label>
              🔊
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => {
                  const v = parseFloat(e.target.value);
                  setVolume(v);
                  audioRef.current.volume = v;
                }}
              />
            </label>
            <button onClick={() => setLoop(!loop)}>{loop ? "🔁 On" : "🔁 Off"}</button>
            <button onClick={() => setShuffle(!shuffle)}>{shuffle ? "🔀 On" : "🔀 Off"}</button>
          </div>
        </>
      )}
    </div>
  );
}