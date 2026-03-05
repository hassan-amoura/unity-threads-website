import type {
  BulkOrderInput,
  CorporateOrderInput,
  CustomOrderInput
} from "@/lib/orders/schemas";

type OrderKind = "custom" | "corporate" | "bulk";

export interface StoredOrder<T> {
  id: string;
  kind: OrderKind;
  payload: T;
  createdAt: string;
}

export const customOrders: StoredOrder<CustomOrderInput>[] = [];
export const corporateOrders: StoredOrder<CorporateOrderInput>[] = [];
export const bulkOrders: StoredOrder<BulkOrderInput>[] = [];

export function createOrderId(prefix: string) {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}`;
}

