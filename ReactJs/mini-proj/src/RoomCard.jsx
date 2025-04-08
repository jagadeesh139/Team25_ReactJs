import React from "react";
import { Card } from "@/components/ui/card";

export default function RoomCard({ room }) {
  return (
    <Card className="p-4">
      <img src={room.image} alt={room.type} className="w-full h-32 object-cover mb-2 rounded" />
      <h2 className="text-xl font-semibold">{room.type} Room</h2>
      <p>Price: ${room.price}</p>
      <p>Location: {room.location}</p>
      <p>Amenities: {room.amenities.join(", ")}</p>
      <p className="text-green-600 font-bold">Match Score: {room.matchScore}</p>
    </Card>
  );
}