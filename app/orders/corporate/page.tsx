"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  corporateOrderSchema,
  type CorporateOrderInput
} from "@/lib/orders/schemas";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

type FormValues = CorporateOrderInput;

export default function CorporateOrdersPage() {
  const router = useRouter();
  const { success, error } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(corporateOrderSchema)
  });

  const onSubmit = async (values: FormValues) => {
    console.info("Submitting corporate order request", values);
    try {
      const res = await fetch("/api/orders/corporate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!res.ok) {
        throw new Error("Request failed");
      }
      const data = (await res.json()) as { id: string };
      success(
        "Corporate request received",
        "We’ll follow up with thoughtful options and clear next steps."
      );
      router.push(`/orders/corporate/confirmed?requestId=${data.id}`);
    } catch (e) {
      console.error("Corporate order submission failed", e);
      error(
        "Something felt off",
        "We weren’t able to send this request just yet. Please try again shortly."
      );
    }
  };

  return (
    <div className="container py-10 md:py-14 max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Sensory-aware apparel for teams and events.
        </h1>
        <p className="text-sm text-ut-muted max-w-prose">
          Outfit your staff, volunteers, or community partners with pieces that center accessibility
          and autism acceptance—without resorting to clinical or stereotyped visuals.
        </p>
      </header>
      <form
        className="space-y-4 rounded-2xl border border-ut-muted/30 bg-white p-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label="Company or organization"
            name="companyName"
            register={register}
            error={errors.companyName?.message}
          />
          <Field
            label="Primary contact name"
            name="contactName"
            register={register}
            error={errors.contactName?.message}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email?.message}
          />
          <Field
            label="Phone"
            name="phone"
            register={register}
            error={errors.phone?.message}
          />
        </div>
        <Field
          label="Quantity estimate"
          name="quantityEstimate"
          register={register}
          error={errors.quantityEstimate?.message}
          placeholder="For example: 40 crew necks for staff."
        />
        <Field
          label="Products needed"
          name="productsNeeded"
          register={register}
          error={errors.productsNeeded?.message}
          placeholder="Short Sleeve tees, crew necks, children’s sizes, etc."
        />
        <Field
          label="Branding needs (optional)"
          name="brandingNeeds"
          register={register}
          error={errors.brandingNeeds?.message}
          placeholder="Placement preferences, tone guidelines, or internal language."
        />
        <Field
          label="Logo URL (optional)"
          name="logoUrl"
          register={register}
          error={errors.logoUrl?.message}
          placeholder="Link to a logo file or brand folder."
        />
        <Field
          label="Timeline"
          name="timeline"
          register={register}
          error={errors.timeline?.message}
          placeholder="Event dates, launch windows, or key milestones."
        />
        <Field
          label="Shipping destination"
          name="shippingDestination"
          register={register}
          error={errors.shippingDestination?.message}
          placeholder="City, country, and any access details for delivery."
        />
        <div className="space-y-1">
          <label
            htmlFor="notes"
            className="text-xs font-medium text-ut-slate"
          >
            Notes
          </label>
          <Textarea
            id="notes"
            rows={4}
            {...register("notes")}
            placeholder="Share any accessibility commitments, accommodations, or internal context."
          />
          {errors.notes && (
            <p className="text-[11px] text-red-600" role="alert">
              {errors.notes.message}
            </p>
          )}
        </div>
        <Button type="submit" className="mt-2" disabled={isSubmitting}>
          {isSubmitting ? "Sending request..." : "Submit corporate order request"}
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
}

function Field({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder
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

