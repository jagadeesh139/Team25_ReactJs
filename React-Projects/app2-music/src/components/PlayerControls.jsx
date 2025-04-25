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
    <div className="w-full max-w-2xl mx-auto mt-6 bg-white shadow-xl rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-center space-x-4 text-3xl">
        <button
          onClick={prev}
          className="hover:text-blue-600 transition-colors duration-200"
        >
          ⏮️
        </button>
        <button
          onClick={togglePlay}
          className="hover:text-green-600 transition-colors duration-200"
        >
          ⏯️
        </button>
        <button
          onClick={next}
          className="hover:text-blue-600 transition-colors duration-200"
        >
          ⏭️
        </button>
      </div>

      <div className="text-center text-lg font-medium text-gray-700">
        {state.currentTrack
          ? `${state.currentTrack.title} - ${state.currentTrack.artist}`
          : "🎶 No track playing"}
      </div>

      {state.currentTrack && (
        <>
          <audio
            ref={audioRef}
            className="w-full mt-2"
            loop={loop}
            onTimeUpdate={() =>
              setCurrentTime(audioRef.current.currentTime)
            }
            onLoadedMetadata={() =>
              setDuration(audioRef.current.duration)
            }
            onEnded={() => !loop && next()}
          >
            <source src={state.currentTrack.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 text-sm text-gray-600">
            <span>
              ⏱️ {Math.floor(currentTime)}s / {Math.floor(duration)}s
            </span>

            <label className="flex items-center space-x-2">
              <span>🔊</span>
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
                className="w-32 accent-blue-500"
              />
            </label>

            <button
              onClick={() => setLoop(!loop)}
              className={`px-3 py-1 rounded-md border ${loop ? "bg-blue-100 border-blue-400 text-blue-600" : "bg-gray-100"
                }`}
            >
              {loop ? "🔁 On" : "🔁 Off"}
            </button>

            <button
              onClick={() => setShuffle(!shuffle)}
              className={`px-3 py-1 rounded-md border ${shuffle ? "bg-yellow-100 border-yellow-400 text-yellow-600" : "bg-gray-100"
                }`}
            >
              {shuffle ? "🔀 On" : "🔀 Off"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
