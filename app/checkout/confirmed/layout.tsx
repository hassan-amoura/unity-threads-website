import { ReactNode } from "react";

export const metadata = {
  title: "Order confirmed",
  description:
    "A gentle confirmation screen summarizing your Unity Threads order in this demo experience."
};

export default function CheckoutConfirmedLayout({
  children
}: {
  children: ReactNode;
}) {
  return children;
}
