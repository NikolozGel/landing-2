import { differenceInYears, parseISO, isValid } from "date-fns";
import z from "zod";

// Translation messages
const messages = {
  en: {
    firstName: {
      required: "First name is required",
      minLength: "First name must be at least 2 characters",
      maxLength: "First name must not exceed 50 characters",
      invalid:
        "First name can only contain letters, spaces, hyphens, and apostrophes",
    },
    lastName: {
      required: "Last name is required",
      minLength: "Last name must be at least 2 characters",
      maxLength: "Last name must not exceed 50 characters",
      invalid:
        "Last name can only contain letters, spaces, hyphens, and apostrophes",
    },
    email: {
      required: "Email is required",
      invalid: "Please enter a valid email address",
      maxLength: "Email must not exceed 100 characters",
    },
    username: {
      required: "Username is required",
      minLength: "Username must be at least 3 characters",
      maxLength: "Username must not exceed 30 characters",
      invalid:
        "Username can only contain letters, numbers, underscores, and hyphens",
      mustStartWithLetter: "Username must start with a letter",
    },
    password: {
      required: "Password is required",
      minLength: "Password must be at least 8 characters",
      maxLength: "Password must not exceed 128 characters",
      needsLowercase: "Password must contain at least one lowercase letter",
      needsUppercase: "Password must contain at least one uppercase letter",
      needsNumber: "Password must contain at least one number",
      needsSpecial: "Password must contain at least one special character",
    },
    phoneNumber: {
      required: "Phone number is required",
      minLength: "Phone number must be at least 6 digits",
      maxLength: "Phone number must not exceed 20 characters",
      invalid: "Please enter a valid phone number",
    },
    telephone: {
      maxLength: "Telephone must not exceed 20 characters",
      invalid: "Please enter a valid telephone number",
    },
    country: {
      required: "Please select your country",
      maxLength: "Country name is too long",
    },
    language: {
      required: "Please select your preferred language",
      maxLength: "Language name is too long",
    },
    dateOfBirth: {
      required: "Date of birth is required",
      invalid: "Please enter a valid date",
      future: "Date of birth cannot be in the future",
      tooYoung: "You must be at least 18 years old to register",
      tooOld: "Please enter a valid date of birth",
    },
  },
  de: {
    firstName: {
      required: "Vorname ist erforderlich",
      minLength: "Vorname muss mindestens 2 Zeichen lang sein",
      maxLength: "Vorname darf nicht länger als 50 Zeichen sein",
      invalid:
        "Vorname darf nur Buchstaben, Leerzeichen, Bindestriche und Apostrophe enthalten",
    },
    lastName: {
      required: "Nachname ist erforderlich",
      minLength: "Nachname muss mindestens 2 Zeichen lang sein",
      maxLength: "Nachname darf nicht länger als 50 Zeichen sein",
      invalid:
        "Nachname darf nur Buchstaben, Leerzeichen, Bindestriche und Apostrophe enthalten",
    },
    email: {
      required: "E-Mail ist erforderlich",
      invalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
      maxLength: "E-Mail darf nicht länger als 100 Zeichen sein",
    },
    username: {
      required: "Benutzername ist erforderlich",
      minLength: "Benutzername muss mindestens 3 Zeichen lang sein",
      maxLength: "Benutzername darf nicht länger als 30 Zeichen sein",
      invalid:
        "Benutzername darf nur Buchstaben, Zahlen, Unterstriche und Bindestriche enthalten",
      mustStartWithLetter: "Benutzername muss mit einem Buchstaben beginnen",
    },
    password: {
      required: "Passwort ist erforderlich",
      minLength: "Passwort muss mindestens 8 Zeichen lang sein",
      maxLength: "Passwort darf nicht länger als 128 Zeichen sein",
      needsLowercase:
        "Passwort muss mindestens einen Kleinbuchstaben enthalten",
      needsUppercase: "Passwort muss mindestens einen Großbuchstaben enthalten",
      needsNumber: "Passwort muss mindestens eine Zahl enthalten",
      needsSpecial: "Passwort muss mindestens ein Sonderzeichen enthalten",
    },
    phoneNumber: {
      required: "Telefonnummer ist erforderlich",
      minLength: "Telefonnummer muss mindestens 6 Ziffern enthalten",
      maxLength: "Telefonnummer darf nicht länger als 20 Zeichen sein",
      invalid: "Bitte geben Sie eine gültige Telefonnummer ein",
    },
    telephone: {
      maxLength: "Telefon darf nicht länger als 20 Zeichen sein",
      invalid: "Bitte geben Sie eine gültige Telefonnummer ein",
    },
    country: {
      required: "Bitte wählen Sie Ihr Land aus",
      maxLength: "Ländername ist zu lang",
    },
    language: {
      required: "Bitte wählen Sie Ihre bevorzugte Sprache aus",
      maxLength: "Sprachname ist zu lang",
    },
    dateOfBirth: {
      required: "Geburtsdatum ist erforderlich",
      invalid: "Bitte geben Sie ein gültiges Datum ein",
      future: "Geburtsdatum darf nicht in der Zukunft liegen",
      tooYoung:
        "Sie müssen mindestens 18 Jahre alt sein, um sich zu registrieren",
      tooOld: "Bitte geben Sie ein gültiges Geburtsdatum ein",
    },
  },
  es: {
    firstName: {
      required: "El nombre es obligatorio",
      minLength: "El nombre debe tener al menos 2 caracteres",
      maxLength: "El nombre no debe exceder los 50 caracteres",
      invalid:
        "El nombre solo puede contener letras, espacios, guiones y apóstrofes",
    },
    lastName: {
      required: "El apellido es obligatorio",
      minLength: "El apellido debe tener al menos 2 caracteres",
      maxLength: "El apellido no debe exceder los 50 caracteres",
      invalid:
        "El apellido solo puede contener letras, espacios, guiones y apóstrofes",
    },
    email: {
      required: "El correo electrónico es obligatorio",
      invalid: "Por favor ingrese una dirección de correo electrónico válida",
      maxLength: "El correo electrónico no debe exceder los 100 caracteres",
    },
    username: {
      required: "El nombre de usuario es obligatorio",
      minLength: "El nombre de usuario debe tener al menos 3 caracteres",
      maxLength: "El nombre de usuario no debe exceder los 30 caracteres",
      invalid:
        "El nombre de usuario solo puede contener letras, números, guiones bajos y guiones",
      mustStartWithLetter: "El nombre de usuario debe comenzar con una letra",
    },
    password: {
      required: "La contraseña es obligatoria",
      minLength: "La contraseña debe tener al menos 8 caracteres",
      maxLength: "La contraseña no debe exceder los 128 caracteres",
      needsLowercase:
        "La contraseña debe contener al menos una letra minúscula",
      needsUppercase:
        "La contraseña debe contener al menos una letra mayúscula",
      needsNumber: "La contraseña debe contener al menos un número",
      needsSpecial: "La contraseña debe contener al menos un carácter especial",
    },
    phoneNumber: {
      required: "El número de teléfono es obligatorio",
      minLength: "El número de teléfono debe tener al menos 6 dígitos",
      maxLength: "El número de teléfono no debe exceder los 20 caracteres",
      invalid: "Por favor ingrese un número de teléfono válido",
    },
    telephone: {
      maxLength: "El teléfono no debe exceder los 20 caracteres",
      invalid: "Por favor ingrese un número de teléfono válido",
    },
    country: {
      required: "Por favor seleccione su país",
      maxLength: "El nombre del país es demasiado largo",
    },
    language: {
      required: "Por favor seleccione su idioma preferido",
      maxLength: "El nombre del idioma es demasiado largo",
    },
    dateOfBirth: {
      required: "La fecha de nacimiento es obligatoria",
      invalid: "Por favor ingrese una fecha válida",
      future: "La fecha de nacimiento no puede estar en el futuro",
      tooYoung: "Debe tener al menos 18 años para registrarse",
      tooOld: "Por favor ingrese una fecha de nacimiento válida",
    },
  },
};

// Schema factory function
export const createRegisterSchema = (locale: "en" | "de" | "es" = "en") => {
  const t = messages[locale];

  return z.object({
    firstName: z
      .string()
      .min(1, t.firstName.required)
      .min(2, t.firstName.minLength)
      .max(50, t.firstName.maxLength)
      .regex(/^[a-zA-Z\s'-]+$/, t.firstName.invalid),

    lastName: z
      .string()
      .min(1, t.lastName.required)
      .min(2, t.lastName.minLength)
      .max(50, t.lastName.maxLength)
      .regex(/^[a-zA-Z\s'-]+$/, t.lastName.invalid),

    email: z
      .string()
      .min(1, t.email.required)
      .email(t.email.invalid)
      .max(100, t.email.maxLength)
      .toLowerCase()
      .trim(),

    username: z
      .string()
      .min(1, t.username.required)
      .min(3, t.username.minLength)
      .max(30, t.username.maxLength)
      .regex(/^[a-zA-Z0-9_-]+$/, t.username.invalid)
      .regex(/^[a-zA-Z]/, t.username.mustStartWithLetter)
      .toLowerCase()
      .trim(),

    password: z
      .string()
      .min(1, t.password.required)
      .min(8, t.password.minLength)
      .max(128, t.password.maxLength)
      .regex(/[a-z]/, t.password.needsLowercase)
      .regex(/[A-Z]/, t.password.needsUppercase)
      .regex(/[0-9]/, t.password.needsNumber)
      .regex(/[^a-zA-Z0-9]/, t.password.needsSpecial),

    phoneNumber: z
      .string()
      .min(1, t.phoneNumber.required)
      .min(6, t.phoneNumber.minLength)
      .max(20, t.phoneNumber.maxLength)
      .regex(
        /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
        t.phoneNumber.invalid,
      ),

    telephone: z
      .string()
      .max(20, t.telephone.maxLength)
      .regex(
        /^$|^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
        t.telephone.invalid,
      )
      .optional()
      .or(z.literal("")),

    country: z
      .string()
      .min(1, t.country.required)
      .max(100, t.country.maxLength),

    language: z
      .string()
      .min(1, t.language.required)
      .max(50, t.language.maxLength),

    dateOfBirth: z
      .string()
      .min(1, t.dateOfBirth.required)
      .refine(
        (value) => {
          try {
            const date = parseISO(value);
            return isValid(date);
          } catch {
            return false;
          }
        },
        { message: t.dateOfBirth.invalid },
      )
      .refine(
        (value) => {
          try {
            const date = parseISO(value);
            return date <= new Date();
          } catch {
            return false;
          }
        },
        { message: t.dateOfBirth.future },
      )
      .refine(
        (value) => {
          try {
            const date = parseISO(value);
            const age = differenceInYears(new Date(), date);
            return age >= 18;
          } catch {
            return false;
          }
        },
        { message: t.dateOfBirth.tooYoung },
      )
      .refine(
        (value) => {
          try {
            const date = parseISO(value);
            const age = differenceInYears(new Date(), date);
            return age <= 120;
          } catch {
            return false;
          }
        },
        { message: t.dateOfBirth.tooOld },
      ),
  });
};

// Default export (English)
export const registerSchema = createRegisterSchema("en");
export type RegisterSchema = z.infer<typeof registerSchema>;

// Usage examples:
// const schemaEN = createRegisterSchema("en");
// const schemaDE = createRegisterSchema("de");
// const schemaES = createRegisterSchema("es");
