import { NextResponse } from "next/server";
import { bulkOrderSchema } from "@/lib/orders/schemas";
import { bulkOrders, createOrderId } from "@/lib/orders/store";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = bulkOrderSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const id = createOrderId("UT-BULK");
  const record = {
    id,
    kind: "bulk" as const,
    payload: parsed.data,
    createdAt: new Date().toISOString()
  };
  bulkOrders.push(record);
  console.info("Bulk order request stored", record);

  return NextResponse.json({ id });
}

