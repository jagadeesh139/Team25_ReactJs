export function matchRooms(userPrefs, allRooms) {
    return allRooms
      .map((room) => {
        let score = 0;
        if (room.type === userPrefs.type) score += 20;
        if (room.price <= userPrefs.budget) score += 20;
        if (userPrefs.amenities.every((am) => room.amenities.includes(am))) score += 30;
        if (room.location === userPrefs.location) score += 30;
        return { ...room, matchScore: score };
      })
      .sort((a, b) => b.matchScore - a.matchScore);
  }
  