export const COOKIE_CONFIG = {
  SESSION: {
    name: "session",
  },
  ACCESS_TOKEN: {
    name: "accessToken",
    maxAge: 60 * 15,
  },
  REFRESH_TOKEN: {
    name: "refreshToken",
    maxAge: 60 * 60 * 24 * 7,
  },
} as const;
