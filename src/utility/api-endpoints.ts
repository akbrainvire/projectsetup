export const API_END_POINTS = {
  AUTH: {
    SESSION: "/auth/session",
  },
  MEETINGS: {
    MASTER: "/meetings",
  },
  USERS: {
    MASTER: "/users",
    DETAILS: "/users/:id",
  },
} as const;

export const API_ENDPOINTS = API_END_POINTS;
