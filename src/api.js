
import axios from "axios";

const api = axios.create({
  baseURL: "",
});

// Mock data for development
// Helper to generate seat codes (A1, A2, ... Z20)
const generateSeats = (rows = 10, cols = 20) => {
  const seats = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 1; j <= cols; j++) {
      seats.push(String.fromCharCode(65 + i) + j);
    }
  }
  return seats;
};

const allSeats = generateSeats(10, 20);
const bookedSeats = ["A1", "A2", "B5", "C3", "D7", "E10"];

const MOCK_SHOWS = [
  {
    _id: "1",
    title: "The Dark Knight",
    posterUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
    startTime: new Date().toISOString(),
    seats: allSeats,
    pricing: {
      A: 200,
      B: 150,
      C: 100,
      D: 100,
    },
  },
  {
    _id: "2",
    title: "Inception",
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    startTime: new Date().toISOString(),
    seats: allSeats,
    pricing: {
      A: 200,
      B: 150,
      C: 100,
      D: 100,
    },
  },
  {
    _id: "3",
    title: "Interstellar",
    posterUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=450&fit=crop",
    startTime: new Date().toISOString(),
    seats: allSeats,
    pricing: {
      A: 200,
      B: 150,
      C: 100,
      D: 100,
    },
  },
  {
    _id: "4",
    title: "Avatar",
    posterUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    startTime: new Date().toISOString(),
    seats: allSeats,
    pricing: {
      A: 200,
      B: 150,
      C: 100,
      D: 100,
    },
  },
];

/* SHOWS */
export const getShows = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: MOCK_SHOWS }), 500);
  });
};

export const getShowSeats = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const availableSeats = allSeats.filter(seat => !bookedSeats.includes(seat));
      resolve({
        data: {
          availableSeats,
          lockedSeats: bookedSeats,
        }
      });
    }, 500);
  });
};

/* BOOKINGS */
export const lockSeats = (payload) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: { success: true } }), 300);
  });
};

export const checkout = (payload) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: { sessionId: "mock-session-123" } }), 300);
  });
};

/* RESULT PAGES */
export const getSuccessBooking = (sessionId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: { status: "success", bookingId: "BOOK123" } }), 300);
  });
};

export const getCancelBooking = (sessionId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: { status: "cancelled" } }), 300);
  });
};

export default api;
