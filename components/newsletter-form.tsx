"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

const newsletterSchema = z.object({
  email: z.string().email("Please share a valid email address.")
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const { success, error } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema)
  });

  const onSubmit = async (values: NewsletterValues) => {
    console.info("Newsletter signup (demo only)", values);
    try {
      // In a real app, call your email service here.
      await new Promise((resolve) => setTimeout(resolve, 400));
      success("You’re on our list", "Expect only gentle, low-volume updates.");
      reset();
    } catch (e) {
      console.error("Newsletter signup failed", e);
      error(
        "We couldn’t sign you up",
        "Please try again in a moment or reach out directly if that’s easier."
      );
    }
  };

  return (
    <form
      className="space-y-2"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Newsletter signup"
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          {...register("email")}
        />
        <Button type="submit" className="shrink-0 sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Sign up"}
        </Button>
      </div>
      {errors.email && (
        <p
          id="newsletter-email-error"
          className="text-[11px] text-red-600"
          role="alert"
        >
          {errors.email.message}
        </p>
      )}
      <p className="text-[11px] text-ut-muted">
        We send occasional notes about new drops and impact work. No loud campaigns, no pressure.
      </p>
    </form>
  );
}

