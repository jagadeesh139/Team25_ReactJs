import React, { createContext, useReducer } from "react";

// Create context
export const MusicContext = createContext();

// Initial app state
const initialState = {
  tracks: [
    {
      id: 1,
      title: "Test Track",
      artist: "Test Artist",
      url: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
    },
  ],
  currentTrack: null,
  editingTrack: null,
};

// Reducer function to manage state transitions
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TRACK":
      return {
        ...state,
        tracks: [...state.tracks, action.payload],
      };

    case "DELETE_TRACK":
      return {
        ...state,
        tracks: state.tracks.filter((t) => t.id !== action.payload),
      };

    case "EDIT_TRACK":
      return {
        ...state,
        editingTrack: action.payload,
      };

    case "UPDATE_TRACK":
      return {
        ...state,
        tracks: state.tracks.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
        editingTrack: null,
      };

    case "PLAY_TRACK":
      return {
        ...state,
        currentTrack: action.payload,
      };

    default:
      return state;
  }
}

// Context provider
export function MusicProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MusicContext.Provider value={{ state, dispatch }}>
      {children}
    </MusicContext.Provider>
  );
}
