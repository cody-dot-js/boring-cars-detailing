export function telLink(telephoneNumber: string) {
  return `tel:${telephoneNumber.replace(/\s+/g, "")}`;
}
