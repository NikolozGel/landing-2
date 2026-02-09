import { LoginCredentials } from "../../app/api/types/auth";

export const validateCredentials = (
  credentials: LoginCredentials | null,
): boolean => {
  if (!credentials) return false;

  return !!(
    credentials.emailOrUsername &&
    credentials.password &&
    credentials.emailOrUsername.trim() !== "" &&
    credentials.password.trim() !== ""
  );
};

export const sanitizeCredentials = (
  credentials: LoginCredentials,
): LoginCredentials => {
  const { emailOrUsername, password, rememberMe } = credentials;
  return {
    emailOrUsername,
    password,
    ...(rememberMe && { rememberMe }),
  };
};

export const areCredentialsExpired = (
  credentials: LoginCredentials,
): boolean => {
  return false;
};
