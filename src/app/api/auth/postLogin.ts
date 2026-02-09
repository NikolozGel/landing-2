"use server";

import { LoginCredentials, LoginResponse } from "../types/auth";
import { apiFetcher } from "../utils/api-fetcher";
import { createSession } from "../utils/session";

export const postLogin = async (credentials: LoginCredentials) => {
  const response = await apiFetcher<LoginResponse>(
    "identity/api/auth/client/login",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        domain: process.env.DOMAIN_HOST || "",
      },
      body: credentials,
      noAuth: true,
      fallbackErrorMessages: {
        401: "Invalid credentials provided",
        429: "Too many login attempts, please try again later",
        500: "Login service temporarily unavailable",
      },
    }
  );

  if (response.success && response.data?.accessToken) {
    await createSession(response.data.accessToken, response.data.refreshToken, {
      rememberMe: credentials.rememberMe,
    });
  }

  return response;
};
