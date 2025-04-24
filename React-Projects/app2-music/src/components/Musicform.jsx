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
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Track Title"
          className="input"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Artist"
          className="input"
          value={formData.artist}
          onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
        />
        <input
          type="text"
          placeholder="Audio URL"
          className="input"
          value={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
        />
        <button type="submit" className="button">
          {state.editingTrack ? "Update" : "Add"}
        </button>
      </form>
    );
  }