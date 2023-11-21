import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTimeBasedGreeting() {
  const date = new Date();
  const hours = date.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return greeting;
}

export const passwordSchema = z
  .string()
  .refine(
    (password) =>
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /\W|_/.test(password),
    {
      message:
        "Password must be at least 8 characters long and include a mix of uppercase and lowercase letters, numbers, and special characters",
    }
  );
