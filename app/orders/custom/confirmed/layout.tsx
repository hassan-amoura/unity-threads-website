import { ReactNode } from "react";

export const metadata = {
  title: "Custom order request received",
  description:
    "A soft confirmation screen for your Unity Threads custom order request with next steps and support details."
};

export default function CustomOrderConfirmedLayout({
  children
}: {
  children: ReactNode;
}) {
  return children;
}
