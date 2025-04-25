import React, { useContext } from "react";
import { MusicContext } from "./MusicContext";

export default function TrackList() {
  const { state, dispatch } = useContext(MusicContext);

  return (
    <ul className="space-y-4 mt-6 max-w-3xl mx-auto">
      {state.tracks.map((track) => (
        <li
          key={track.id}
          className={`flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl shadow-md transition-all ${state.currentTrack?.id === track.id
              ? "bg-blue-50 border-l-4 border-blue-500"
              : "bg-white"
            }`}
        >
          <div className="text-gray-800 font-medium text-center sm:text-left">
            <strong>{track.title}</strong> — <span className="text-sm text-gray-500">{track.artist}</span>
          </div>

          <div className="flex space-x-3 mt-2 sm:mt-0">
            <button
              onClick={() => dispatch({ type: "PLAY_TRACK", payload: track })}
              className="px-3 py-1 rounded-md bg-green-100 hover:bg-green-200 text-green-700 text-sm font-semibold transition"
            >
              ▶️ Play
            </button>
            <button
              onClick={() => dispatch({ type: "EDIT_TRACK", payload: track })}
              className="px-3 py-1 rounded-md bg-yellow-100 hover:bg-yellow-200 text-yellow-700 text-sm font-semibold transition"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => dispatch({ type: "DELETE_TRACK", payload: track.id })}
              className="px-3 py-1 rounded-md bg-red-100 hover:bg-red-200 text-red-700 text-sm font-semibold transition"
            >
              🗑️ Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
