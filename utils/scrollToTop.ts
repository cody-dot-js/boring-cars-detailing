export function scrollToTop(top: number = 0) {
  if (typeof window !== "undefined") {
    window.scrollTo({ top, behavior: "smooth" });
  }
}
