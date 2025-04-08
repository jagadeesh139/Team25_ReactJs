import React from "react";

export default function PreferencesForm({ userPrefs, setUserPrefs, handleSearch }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <input
        type="text"
        placeholder="Room Type"
        className="p-2 border rounded"
        onChange={(e) => setUserPrefs({ ...userPrefs, type: e.target.value })}
      />
      <input
        type="number"
        placeholder="Max Budget"
        className="p-2 border rounded"
        onChange={(e) => setUserPrefs({ ...userPrefs, budget: Number(e.target.value) })}
      />
      <input
        type="text"
        placeholder="Location"
        className="p-2 border rounded"
        onChange={(e) => setUserPrefs({ ...userPrefs, location: e.target.value })}
      />
      <input
        type="text"
        placeholder="Amenities (comma separated)"
        className="p-2 border rounded"
        onChange={(e) =>
          setUserPrefs({
            ...userPrefs,
            amenities: e.target.value.split(",").map((a) => a.trim())
          })
        }
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded col-span-full"
      >
        Search Rooms
      </button>
    </div>
  );
}
