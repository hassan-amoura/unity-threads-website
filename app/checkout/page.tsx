"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCartStore } from "@/lib/store/cart-store";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Price } from "@/components/storefront/price";

const shippingSchema = z.object({
  fullName: z.string().min(2, "Please enter a name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  address1: z.string().min(3, "Please enter a street address."),
  address2: z.string().optional(),
  city: z.string().min(2, "Please enter a city."),
  state: z.string().min(2, "Please enter a state or region."),
  postalCode: z.string().min(3, "Please enter a postal or ZIP code."),
  country: z.string().min(2, "Please enter a country.")
});

const paymentSchema = z.object({
  cardName: z.string().min(2, "Please add a name for the card."),
  cardNumber: z.string().min(8, "This is a visual placeholder only."),
  notes: z.string().optional()
});

type ShippingValues = z.infer<typeof shippingSchema>;
type PaymentValues = z.infer<typeof paymentSchema>;

export default function CheckoutPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clear);
  const router = useRouter();

  const shippingForm = useForm<ShippingValues>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      country: "United States"
    }
  });

  const paymentForm = useForm<PaymentValues>({
    resolver: zodResolver(paymentSchema)
  });

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleShippingSubmit = (values: ShippingValues) => {
    console.info("Shipping details", values);
    setStep(2);
  };

  const handlePaymentSubmit = (values: PaymentValues) => {
    console.info("Payment details (placeholder only)", values);
    const orderId = `UT-${Date.now().toString(36).toUpperCase()}`;
    clearCart();
    router.push(`/checkout/confirmed?orderId=${orderId}`);
  };

  if (items.length === 0 && step !== 3) {
    return (
      <div className="container py-12 md:py-16 max-w-2xl">
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Your cart is currently empty.
        </h1>
        <p className="mt-3 text-sm text-ut-muted">
          When you add pieces to your cart, you&apos;ll return here to confirm your details.
        </p>
        <div className="mt-6">
          <Button asChild>
            <a href="/shop">Return to shop</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-10 md:py-14 grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
      <section className="space-y-6">
        <header>
          <h1 className="font-display text-2xl tracking-tight">
            A calm, step-by-step checkout.
          </h1>
          <p className="mt-2 text-sm text-ut-muted max-w-prose">
            Take your time, check details at your own pace, and know that this demo won&apos;t
            process real payments.
          </p>
        </header>

        <ol className="flex gap-3 text-xs text-ut-muted">
          <li className={step === 1 ? "font-semibold text-ut-slate" : ""}>
            1. Shipping
          </li>
          <li aria-hidden="true">›</li>
          <li className={step === 2 ? "font-semibold text-ut-slate" : ""}>
            2. Contact & payment
          </li>
          <li aria-hidden="true">›</li>
          <li className={step === 3 ? "font-semibold text-ut-slate" : ""}>
            3. Confirmation
          </li>
        </ol>

        {step === 1 && (
          <form
            className="space-y-4 rounded-2xl border border-ut-muted/30 bg-white p-4"
            onSubmit={shippingForm.handleSubmit(handleShippingSubmit)}
            noValidate
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <Field
                label="Full name"
                name="fullName"
                register={shippingForm.register}
                error={shippingForm.formState.errors.fullName?.message}
                autoComplete="name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                register={shippingForm.register}
                error={shippingForm.formState.errors.email?.message}
                autoComplete="email"
              />
            </div>
            <Field
              label="Phone (optional)"
              name="phone"
              register={shippingForm.register}
              error={shippingForm.formState.errors.phone?.message}
              autoComplete="tel"
            />
            <Field
              label="Address line 1"
              name="address1"
              register={shippingForm.register}
              error={shippingForm.formState.errors.address1?.message}
              autoComplete="address-line1"
            />
            <Field
              label="Address line 2 (optional)"
              name="address2"
              register={shippingForm.register}
              error={shippingForm.formState.errors.address2?.message}
              autoComplete="address-line2"
            />
            <div className="grid gap-3 sm:grid-cols-3">
              <Field
                label="City"
                name="city"
                register={shippingForm.register}
                error={shippingForm.formState.errors.city?.message}
                autoComplete="address-level2"
              />
              <Field
                label="State / region"
                name="state"
                register={shippingForm.register}
                error={shippingForm.formState.errors.state?.message}
                autoComplete="address-level1"
              />
              <Field
                label="Postal / ZIP"
                name="postalCode"
                register={shippingForm.register}
                error={shippingForm.formState.errors.postalCode?.message}
                autoComplete="postal-code"
              />
            </div>
            <Field
              label="Country"
              name="country"
              register={shippingForm.register}
              error={shippingForm.formState.errors.country?.message}
              autoComplete="country"
            />
            <Button type="submit" className="mt-2">
              Continue to contact & payment
            </Button>
          </form>
        )}

        {step === 2 && (
          <form
            className="space-y-4 rounded-2xl border border-ut-muted/30 bg-white p-4"
            onSubmit={paymentForm.handleSubmit(handlePaymentSubmit)}
            noValidate
          >
            <Field
              label="Name on card (placeholder)"
              name="cardName"
              register={paymentForm.register}
              error={paymentForm.formState.errors.cardName?.message}
            />
            <Field
              label="Card number (placeholder, not charged)"
              name="cardNumber"
              register={paymentForm.register}
              error={paymentForm.formState.errors.cardNumber?.message}
            />
            <div className="space-y-1">
              <label className="text-xs font-medium text-ut-slate">
                Notes for our team (optional)
              </label>
              <Textarea
                {...paymentForm.register("notes")}
                rows={4}
                placeholder="Share any access needs, delivery notes, or requests."
              />
            </div>
            <div className="flex items-center gap-3 pt-1">
              <Button type="submit">Place order (demo)</Button>
              <button
                type="button"
                className="text-xs text-ut-muted underline underline-offset-4 hover:text-ut-slate"
                onClick={() => setStep(1)}
              >
                Back to shipping
              </button>
            </div>
          </form>
        )}
      </section>

      <aside
        aria-label="Order summary"
        className="space-y-4 rounded-2xl border border-ut-muted/30 bg-white p-4 shadow-soft"
      >
        <h2 className="text-sm font-semibold tracking-tight">Order summary</h2>
        <ul className="space-y-2 text-xs text-ut-muted max-h-60 overflow-auto pr-1">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-2">
              <span>
                {item.product.name} × {item.quantity}
              </span>
              <Price amount={item.product.price * item.quantity} />
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-sm pt-2 border-t border-ut-muted/40">
          <span className="text-ut-muted">Subtotal</span>
          <Price amount={subtotal} />
        </div>
        <p className="text-[11px] text-ut-muted">
          This is a non-processing demo. In a full build, this step would securely connect to your
          payment provider of choice.
        </p>
      </aside>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  type?: string;
  autoComplete?: string;
}

function Field({
  label,
  name,
  register,
  error,
  type = "text",
  autoComplete
}: FieldProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-xs font-medium text-ut-slate">
        {label}
      </label>
      <Input
        id={name}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        autoComplete={autoComplete}
        {...register(name as any)}
      />
      {error && (
        <p
          id={`${name}-error`}
          className="text-[11px] text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

