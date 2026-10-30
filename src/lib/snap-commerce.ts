/** Demo pricing for Snap commerce events (INR) until real checkout exists. */
export const DEMO_ITEM_PRICE_INR = 599;

export function snapItemPayload(productName: string, quantity = 1) {
  return {
    item_ids: productName,
    item_category: "festive_decor",
    description: productName,
    price: DEMO_ITEM_PRICE_INR * quantity,
    currency: "INR",
    number_items: quantity,
  };
}
