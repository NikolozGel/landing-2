"use server";

import { apiFetcher } from "@/app/api/utils/api-fetcher";
import type { LoginCredentials, LoginResponse } from "@/app/api/types/auth";
import { createSession } from "@/app/api/utils/session";

interface Payload {
 oldPassword:string;
  newPassword:string;
  confirmPassword:string;
}

export const postResetPass = async (payloads: Payload) => {
  const response = await apiFetcher<LoginResponse>(
    "identity/api/auth/client/change-password",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payloads,
      fallbackErrorMessages: {
        401: "Invalid credentials provided",
        429: "Too many login attempts, please try again later",
        500: "Login service temporarily unavailable",
      },
    }
  );


  return response;
};
