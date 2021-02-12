export type Package = "Regular" | "Plus" | "Premium";

export const packageName: Record<Package, Package> = {
  Regular: "Regular",
  Plus: "Plus",
  Premium: "Premium",
};

export const packagePrice: Record<Package, number> = {
  Regular: 80,
  Plus: 100,
  Premium: 150,
};
