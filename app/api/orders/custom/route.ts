import { NextResponse } from "next/server";
import { customOrderSchema } from "@/lib/orders/schemas";
import { createOrderId, customOrders } from "@/lib/orders/store";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = customOrderSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const id = createOrderId("UT-CUSTOM");
  const record = {
    id,
    kind: "custom" as const,
    payload: parsed.data,
    createdAt: new Date().toISOString()
  };
  customOrders.push(record);
  console.info("Custom order request stored", record);

  return NextResponse.json({ id });
}

