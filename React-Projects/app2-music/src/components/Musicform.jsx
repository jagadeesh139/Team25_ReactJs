import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "./MusicContext";

export default function AddEditTrackForm() {
  const { state, dispatch } = useContext(MusicContext);
  const [formData, setFormData] = useState({ title: "", artist: "", url: "" });

  useEffect(() => {
    if (state.editingTrack) {
      setFormData(state.editingTrack);
    } else {
      setFormData({ title: "", artist: "", url: "" });
    }
  }, [state.editingTrack]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.artist || !formData.url) return;

    if (state.editingTrack) {
      dispatch({ type: "UPDATE_TRACK", payload: formData });
    } else {
      dispatch({ type: "ADD_TRACK", payload: { ...formData, id: Date.now() } });
    }
    setFormData({ title: "", artist: "", url: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white/30 backdrop-blur-lg rounded-3xl shadow-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 drop-shadow-sm">
          {state.editingTrack ? "Edit Track" : "Add New Track"}
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Track Title"
            className="w-full p-4 bg-white/50 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 text-gray-700 placeholder-gray-500 transition"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Artist"
            className="w-full p-4 bg-white/50 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 text-gray-700 placeholder-gray-500 transition"
            value={formData.artist}
            onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
          />
          <input
            type="text"
            placeholder="Audio URL"
            className="w-full p-4 bg-white/50 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 text-gray-700 placeholder-gray-500 transition"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          {state.editingTrack ? "Update Track" : "Add Track"}
        </button>
      </form>
    </div>
  );
}
