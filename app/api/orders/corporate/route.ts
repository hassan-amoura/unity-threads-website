import { NextResponse } from "next/server";
import { corporateOrderSchema } from "@/lib/orders/schemas";
import { corporateOrders, createOrderId } from "@/lib/orders/store";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = corporateOrderSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const id = createOrderId("UT-CORP");
  const record = {
    id,
    kind: "corporate" as const,
    payload: parsed.data,
    createdAt: new Date().toISOString()
  };
  corporateOrders.push(record);
  console.info("Corporate order request stored", record);

  return NextResponse.json({ id });
}

