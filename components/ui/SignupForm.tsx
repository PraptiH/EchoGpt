"use client";

import { CircleCheck, Loader2 } from "lucide-react";
import { useActionState } from "react";
import { joinWaitlist, type SignupState } from "@/app/actions";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const initialState: SignupState = { status: "idle" };

export default function SignupForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/15 px-4 py-3 text-sm font-medium text-white"
      >
        <CircleCheck className="size-5 shrink-0" aria-hidden />
        {state.message}
      </p>
    );
  }

  const error = state.status === "error" ? state.message : undefined;

  return (
    <form action={formAction} noValidate className="mx-auto mt-8 max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="cta-email" className="sr-only">
          Work email
        </label>
        <input
          id="cta-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          defaultValue={state.status === "error" ? state.email : undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "cta-email-error" : undefined}
          className="h-11 w-full min-w-0 rounded-md sm:flex-1 border border-white/30 bg-white/15 px-4 text-sm text-white placeholder:text-white/70 outline-none transition focus:border-white/60 focus:bg-white/20 aria-invalid:border-red-200"
        />
        <button
          type="submit"
          disabled={pending}
          className={cn(buttonVariants({ variant: "inverse", size: "lg" }), "rounded-md font-bold")}
        >
          {pending && <Loader2 className="size-4 animate-spin" aria-hidden />}
          {pending ? "Joining…" : "Get Started Free"}
        </button>
      </div>
      <p id="cta-email-error" aria-live="polite" className="mt-2 min-h-5 text-left text-xs font-medium text-red-100">
        {error}
      </p>
    </form>
  );
}
