import React, { Component } from "react";
import "./Hotel.css";
class Hotelbooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
      availableRooms: [
        { roomNumber: 101, roomType: "Deluxe" },
        { roomNumber: 102, roomType: "Standard" },
        { roomNumber: 103, roomType: "Suite" },
      ],
      canceledReservations: [],
      roomCategories: ["Standard", "Deluxe", "Suite"],
      selectedRoomNumber: "",
      selectedDate: "",
      availabilityResult: null,
    };
  }

  addReservation = (reservation) => {
    this.setState((prevState) => ({
      reservations: [...prevState.reservations, reservation],
      availableRooms: prevState.availableRooms.filter(
        (room) => room.roomNumber !== reservation.roomNumber
      ),
    }));
  };

  cancelReservation = (reservationID) => {
    this.setState((prevState) => {
      const reservation = prevState.reservations.find((res) => res.id === reservationID);
      if (reservation) {
        return {
          reservations: prevState.reservations.filter((res) => res.id !== reservationID),
          canceledReservations: [...prevState.canceledReservations, reservation],
          availableRooms: [
            ...prevState.availableRooms,
            { roomNumber: reservation.roomNumber, roomType: reservation.roomType },
          ],
        };
      }
      return {};
    });
  };

  checkAvailability = (roomNumber, date) => {
    const { reservations } = this.state;
    const isOccupied = reservations.some(
      (res) =>
        res.roomNumber === parseInt(roomNumber) &&
        new Date(res.checkInDate) <= new Date(date) &&
        new Date(res.checkOutDate) >= new Date(date)
    );
    return !isOccupied;
  };

  handleAddReservation = () => {
    const newReservation = {
      id: Date.now(),
      roomNumber: 101,
      guestName: "John Doe",
      checkInDate: "2025-05-01",
      checkOutDate: "2025-05-05",
      roomType: "Deluxe",
      status: "Booked",
    };
    this.addReservation(newReservation);
  };

  handleCancelReservation = (id) => {
    this.cancelReservation(id);
  };

  handleCheckAvailability = () => {
    const { selectedRoomNumber, selectedDate } = this.state;
    const available = this.checkAvailability(selectedRoomNumber, selectedDate);
    this.setState({ availabilityResult: available });
  };

  render() {
    const { reservations, availableRooms, canceledReservations, roomCategories, selectedRoomNumber, selectedDate, availabilityResult } = this.state;

    const occupiedRooms = reservations.filter((res) =>
      !canceledReservations.some((cancelled) => cancelled.id === res.id)
    );

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Hotel Reservation System</h1>

        <button onClick={this.handleAddReservation} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Add Reservation (Demo)
        </button>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Check Room Availability</h2>
          <div className="flex space-x-4 mt-2">
            <input
              type="number"
              placeholder="Room Number"
              value={selectedRoomNumber}
              onChange={(e) => this.setState({ selectedRoomNumber: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => this.setState({ selectedDate: e.target.value })}
              className="border p-2 rounded"
            />
            <button
              onClick={this.handleCheckAvailability}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Check
            </button>
          </div>
          {availabilityResult !== null && (
            <p className="mt-2">
              {availabilityResult ? (
                <span className="text-green-600">Room is available</span>
              ) : (
                <span className="text-red-600">Room is occupied</span>
              )}
            </p>
          )}
        </div>

        <h2 className="text-xl font-semibold mt-4">Reservations</h2>
        <ul className="list-disc ml-6">
          {reservations.map((res) => (
            <li key={res.id} className="flex justify-between items-center">
              {res.guestName} - Room {res.roomNumber}
              <button
                onClick={() => this.handleCancelReservation(res.id)}
                className="bg-red-500 text-white px-2 py-1 rounded ml-4"
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-4">Available Rooms</h2>
        <ul className="list-disc ml-6">
          {availableRooms.map((room) => (
            <li key={room.roomNumber}>
              Room {room.roomNumber} - {room.roomType}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-4">Occupied Rooms</h2>
        <ul className="list-disc ml-6">
          {occupiedRooms.map((res) => (
            <li key={res.id}>Room {res.roomNumber} - {res.guestName}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-4">Canceled Reservations</h2>
        <ul className="list-disc ml-6">
          {canceledReservations.map((res) => (
            <li key={res.id}>
              {res.guestName} - Room {res.roomNumber} (Canceled)
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-4">Room Categories</h2>
        <ul className="list-disc ml-6">
          {roomCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Hotelbooking;
