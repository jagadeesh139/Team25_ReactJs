import React, { useState } from "react";
import { Roomsdata } from "../data/Roomsdata";
import { matchRooms } from "../utils/matchRooms";
import PreferencesForm from "../components/PreferencesForm";
import RoomCard from "../components/RoomCard";

export default function RoomsToNights() {
    const [userPrefs, setUserPrefs] = useState({
        type: "",
        budget: 150,
        amenities: [],
        location: ""
    });
    const [filteredRooms, setFilteredRooms] = useState([]);

    const handleSearch = () => {
        const results = matchRooms(userPrefs, roomsData);
        setFilteredRooms(results);
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">RoomsToNights</h1>
            <PreferencesForm userPrefs={userPrefs} setUserPrefs={setUserPrefs} handleSearch={handleSearch} />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </div>
    );
}
