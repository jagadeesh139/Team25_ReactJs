import React, { useContext } from "react";
import { MusicContext } from "./MusicContext";

export default function TrackList() {
    const { state, dispatch } = useContext(MusicContext);
  
    return (
      <ul className="track-list">
        {state.tracks.map((track) => (
          <li
            key={track.id}
            className={`track-item ${state.currentTrack?.id === track.id ? "active" : ""}`}
          >
            <div>
              <strong>{track.title}</strong> - {track.artist}
            </div>
            <div className="track-actions">
              <button
                onClick={() => dispatch({ type: "PLAY_TRACK", payload: track })}
              >
                ▶️
              </button>
              <button
                onClick={() => dispatch({ type: "EDIT_TRACK", payload: track })}
              >
                ✏️
              </button>
              <button
                onClick={() => dispatch({ type: "DELETE_TRACK", payload: track.id })}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }