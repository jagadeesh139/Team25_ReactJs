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
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        {state.editingTrack ? "Edit Track" : "Add New Track"}
      </h2>

      <input
        type="text"
        placeholder="Track Title"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Artist"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.artist}
        onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
      />
      <input
        type="text"
        placeholder="Audio URL"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.url}
        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
      />
      <button
        type="submit"
        className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        {state.editingTrack ? "Update Track" : "Add Track"}
      </button>
    </form>
  );
}
