import z from "zod";

// Translation messages
const loginMessages = {
  en: {
    emailOrUsername: {
      required: "Email or username is required",
    },
    password: {
      required: "Password is required",
    },
  },
  de: {
    emailOrUsername: {
      required: "E-Mail oder Benutzername ist erforderlich",
    },
    password: {
      required: "Passwort ist erforderlich",
    },
  },
  es: {
    emailOrUsername: {
      required: "El correo electrónico o nombre de usuario es obligatorio",
    },
    password: {
      required: "La contraseña es obligatoria",
    },
  },
};

// Schema factory function
export const createLoginSchema = (locale: "en" | "de" | "es" = "en") => {
  const t = loginMessages[locale];

  return z.object({
    emailOrUsername: z.string().min(1, t.emailOrUsername.required),
    password: z.string().min(1, t.password.required),
    twoFactorCode: z.string().optional(),
    rememberMe: z.boolean().optional(),
  });
};

// Default export (English)
export const loginSchema = createLoginSchema("en");
export type LoginSchema = z.infer<typeof loginSchema>;
