"use server";

import { saveWaitlistEntry } from "@/lib/waitlist";

export type SignupState =
  | { status: "idle" }
  | { status: "error"; message: string; email: string }
  | { status: "success"; message: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function joinWaitlist(_prev: SignupState, formData: FormData): Promise<SignupState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { status: "error", message: "Please enter a valid email address.", email };
  }

  try {
    await saveWaitlistEntry(email);
  } catch (error) {
    console.error("Failed to save waitlist signup", error);
    return {
      status: "error",
      message: "We couldn't save your signup right now. Please try again in a moment.",
      email,
    };
  }

  return {
    status: "success",
    message: `Thanks! ${email} is on the list. We'll be in touch shortly.`,
  };
}
