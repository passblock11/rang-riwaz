/** Demo pricing for Snap commerce events (INR) until real checkout exists. */
export const DEMO_ITEM_PRICE_INR = 599;

export function snapItemPayload(productName: string, quantity = 1) {
  const amount = DEMO_ITEM_PRICE_INR * quantity;
  return {
    item_ids: productName,
    item_category: "festive_decor",
    description: productName,
    /** Snap CAPI + pixel commerce fields */
    value: amount,
    price: amount,
    currency: "INR",
    number_items: quantity,
  };
}

export function snapPurchasePayload(
  itemIds: string,
  totalItems: number,
  totalPrice: number,
  transactionId: string,
) {
  return {
    item_ids: itemIds,
    item_category: "festive_decor",
    value: totalPrice,
    price: totalPrice,
    currency: "INR",
    number_items: totalItems,
    transaction_id: transactionId,
  };
}
