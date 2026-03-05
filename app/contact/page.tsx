"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

const contactSchema = z.object({
  name: z.string().min(2, "Please share a name."),
  email: z.string().email("Please add a valid email."),
  topic: z
    .string()
    .min(2, "Share a short topic or reason for reaching out.")
    .max(120, "You can keep this brief."),
  message: z
    .string()
    .min(10, "Share a bit more so we can respond thoughtfully.")
});

type ContactValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { success, error } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (values: ContactValues) => {
    console.info("Contact message (demo only)", values);
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      success("Message received", "We’ll respond as soon as we thoughtfully can.");
      reset();
    } catch (e) {
      console.error("Contact submission failed", e);
      error(
        "We couldn’t send this just yet",
        "Please try again in a moment or email us directly."
      );
    }
  };

  return (
    <div className="container py-12 md:py-16 max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          We’d love to hear from you.
        </h1>
        <p className="text-sm text-ut-muted max-w-prose">
          Questions, collaborations, access needs, or gentle feedback—everything you share helps us
          build a more thoughtful studio. We read every note with care.
        </p>
      </header>
      <form
        className="space-y-4 rounded-2xl border border-ut-muted/30 bg-white p-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Field
          label="Name"
          name="name"
          register={register}
          error={errors.name?.message}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email?.message}
        />
        <Field
          label="Topic"
          name="topic"
          register={register}
          error={errors.topic?.message}
          placeholder="Sizing, impact, collaboration, access needs..."
        />
        <div className="space-y-1">
          <label
            htmlFor="message"
            className="text-xs font-medium text-ut-slate"
          >
            Message
          </label>
          <Textarea
            id="message"
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p
              id="message-error"
              className="text-[11px] text-red-600"
              role="alert"
            >
              {errors.message.message}
            </p>
          )}
        </div>
        <Button type="submit" className="mt-2" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </form>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: keyof ContactValues | string;
  register: ReturnType<typeof useForm<ContactValues>>["register"];
  error?: string;
  type?: string;
  placeholder?: string;
}

function Field({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder
}: FieldProps) {
  const fieldName = name as keyof ContactValues;
  const id = String(name);
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-xs font-medium text-ut-slate">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        placeholder={placeholder}
        {...register(fieldName)}
      />
      {error && (
        <p
          id={`${id}-error`}
          className="text-[11px] text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

