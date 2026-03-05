"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bulkOrderSchema, type BulkOrderInput } from "@/lib/orders/schemas";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

type FormValues = BulkOrderInput;

export default function BulkOrdersPage() {
  const router = useRouter();
  const { success, error } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(bulkOrderSchema),
    defaultValues: {
      quantity: 10
    }
  });

  const onSubmit = async (values: FormValues) => {
    console.info("Submitting bulk order request", values);
    try {
      const res = await fetch("/api/orders/bulk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!res.ok) {
        throw new Error("Request failed");
      }
      const data = (await res.json()) as { id: string };
      success(
        "Bulk request received",
        "We’ll review your details and follow up with options."
      );
      router.push(`/orders/bulk/confirmed?requestId=${data.id}`);
    } catch (e) {
      console.error("Bulk order submission failed", e);
      error(
        "Something felt off",
        "We weren’t able to send this request yet. Please try again soon."
      );
    }
  };

  return (
    <div className="container py-10 md:py-14 max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Bulk support for your community.
        </h1>
        <p className="text-sm text-ut-muted max-w-prose">
          From school programs to sensory-friendly events, we can help you create apparel that
          honors neurodiversity and feels gentle on a wide range of bodies.
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
          />
          <Field
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email?.message}
          />
        </div>
        <NumberField
          label="Quantity"
          name="quantity"
          register={register}
          error={errors.quantity?.message}
          min={10}
        />
        <Field
          label="Product types"
          name="productTypes"
          register={register}
          error={errors.productTypes?.message}
          placeholder="For example: a mix of tees and crew necks."
        />
        <div className="space-y-1">
          <label
            htmlFor="sizeBreakdown"
            className="text-xs font-medium text-ut-slate"
          >
            Size breakdown
          </label>
          <Textarea
            id="sizeBreakdown"
            rows={4}
            {...register("sizeBreakdown")}
            aria-invalid={!!errors.sizeBreakdown}
            aria-describedby={
              errors.sizeBreakdown ? "sizeBreakdown-error" : undefined
            }
            placeholder="You can paste a simple table here. For example: 4×XS, 8×S, 10×M..."
          />
          {errors.sizeBreakdown && (
            <p
              id="sizeBreakdown-error"
              className="text-[11px] text-red-600"
              role="alert"
            >
              {errors.sizeBreakdown.message}
            </p>
          )}
        </div>
        <Field
          label="Colors"
          name="colors"
          register={register}
          error={errors.colors?.message}
          placeholder="Share color directions, school colors, or sensory notes."
        />
        <Field
          label="Timeline"
          name="timeline"
          register={register}
          error={errors.timeline?.message}
          placeholder="Event dates or ideal delivery windows."
        />
        <div className="space-y-1">
          <label
            htmlFor="shippingInfo"
            className="text-xs font-medium text-ut-slate"
          >
            Shipping info
          </label>
          <Textarea
            id="shippingInfo"
            rows={3}
            {...register("shippingInfo")}
            aria-invalid={!!errors.shippingInfo}
            aria-describedby={
              errors.shippingInfo ? "shippingInfo-error" : undefined
            }
            placeholder="Share address details and any delivery considerations."
          />
          {errors.shippingInfo && (
            <p
              id="shippingInfo-error"
              className="text-[11px] text-red-600"
              role="alert"
            >
              {errors.shippingInfo.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="notes" className="text-xs font-medium text-ut-slate">
            Notes
          </label>
          <Textarea
            id="notes"
            rows={4}
            {...register("notes")}
            placeholder="Anything else you’d like us to know about your community or event."
          />
          {errors.notes && (
            <p className="text-[11px] text-red-600" role="alert">
              {errors.notes.message}
            </p>
          )}
        </div>
        <Button type="submit" className="mt-2" disabled={isSubmitting}>
          {isSubmitting ? "Sending request..." : "Submit bulk order request"}
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

interface NumberFieldProps extends FieldProps {
  min?: number;
}

function NumberField({
  label,
  name,
  register,
  error,
  min
}: NumberFieldProps) {
  const fieldName = name as keyof FormValues;
  const id = String(name);
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-xs font-medium text-ut-slate">
        {label}
      </label>
      <Input
        id={id}
        type="number"
        min={min}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...register(fieldName, { valueAsNumber: true })}
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

