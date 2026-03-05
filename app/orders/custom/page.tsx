"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { customOrderSchema, type CustomOrderInput } from "@/lib/orders/schemas";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

type FormValues = CustomOrderInput;

export default function CustomOrdersPage() {
  const router = useRouter();
  const { success, error } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(customOrderSchema)
  });

  const onSubmit = async (values: FormValues) => {
    console.info("Submitting custom order request", values);
    try {
      const res = await fetch("/api/orders/custom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!res.ok) {
        throw new Error("Request failed");
      }
      const data = (await res.json()) as { id: string };
      success("Request received", "We’ll follow up with care and clarity.");
      router.push(`/orders/custom/confirmed?requestId=${data.id}`);
    } catch (e) {
      console.error("Custom order submission failed", e);
      error(
        "Something felt off",
        "We weren’t able to send this request just yet. Please try again in a moment."
      );
    }
  };

  return (
    <div className="container py-10 md:py-14 max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Custom pieces for tender moments.
        </h1>
        <p className="text-sm text-ut-muted max-w-prose">
          Whether you&apos;re marking a diagnosis journey, celebrating an autistic pride event, or
          designing something deeply personal, we&apos;ll move at your pace and honor your story.
        </p>
      </header>

      <form
        className="space-y-4 rounded-2xl border border-ut-muted/30 bg-white p-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label="Name"
            name="name"
            register={register}
            error={errors.name?.message}
            autoComplete="name"
          />
          <Field
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email?.message}
            autoComplete="email"
          />
        </div>
        <Field
          label="Phone (optional)"
          name="phone"
          register={register}
          error={errors.phone?.message}
          autoComplete="tel"
        />
        <Field
          label="Preferred product type"
          name="preferredProductType"
          register={register}
          error={errors.preferredProductType?.message}
          placeholder="Crew necks, long sleeve tees, matching sets, etc."
        />
        <Field
          label="Size range"
          name="sizeRange"
          register={register}
          error={errors.sizeRange?.message}
          placeholder="For example: XS–2XL or Kids S–L"
        />
        <Field
          label="Colors"
          name="colors"
          register={register}
          error={errors.colors?.message}
          placeholder="Share colors that feel grounding or joyful for you."
        />
        <Field
          label="Reference image URL (optional)"
          name="referenceImageUrl"
          register={register}
          error={errors.referenceImageUrl?.message}
          placeholder="Link to inspiration, moodboards, or reference art."
        />
        <div className="space-y-1">
          <label
            htmlFor="message"
            className="text-xs font-medium text-ut-slate"
          >
            Message describing the design and intent
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
        <Field
          label="Budget range"
          name="budgetRange"
          register={register}
          error={errors.budgetRange?.message}
          placeholder="For example: $300–$600 or ‘we’re still exploring’."
        />
        <Field
          label="Needed by date"
          name="neededByDate"
          register={register}
          error={errors.neededByDate?.message}
          placeholder="A specific date or a general window."
        />
        <div className="flex items-start gap-2 pt-2">
          <input
            id="consentToContact"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-ut-muted/40 text-ut-primary focus-ring"
            {...register("consentToContact")}
          />
          <div className="space-y-1">
            <label
              htmlFor="consentToContact"
              className="text-xs font-medium text-ut-slate"
            >
              I&apos;m comfortable being contacted about this request.
            </label>
            <p className="text-[11px] text-ut-muted">
              We&apos;ll use your details only to respond to this custom order and related support.
            </p>
            {errors.consentToContact && (
              <p className="text-[11px] text-red-600" role="alert">
                {errors.consentToContact.message}
              </p>
            )}
          </div>
        </div>
        <Button type="submit" className="mt-2" disabled={isSubmitting}>
          {isSubmitting ? "Sending request..." : "Submit custom order request"}
        </Button>
      </form>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: keyof FormValues | string;
  register: ReturnType<typeof useForm<FormValues>>["register"];
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}

function Field({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder,
  autoComplete
}: FieldProps) {
  const fieldName = name as keyof FormValues;
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
        autoComplete={autoComplete}
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

