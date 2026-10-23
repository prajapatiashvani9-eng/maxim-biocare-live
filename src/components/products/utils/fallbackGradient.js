const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg, #0B2A3C 0%, #12897E 100%)",
  "linear-gradient(135deg, #0F2A44 0%, #1B4F72 100%)",
  "linear-gradient(135deg, #0B2A3C 0%, #2E6F6A 100%)",
  "linear-gradient(135deg, #10202B 0%, #3A6E8C 100%)",
  "linear-gradient(135deg, #0B2A3C 0%, #4E7C8C 100%)",
];

export function fallbackFor(category) {
  let hash = 0;
  for (let i = 0; i < category.length; i++) {
    hash = category.charCodeAt(i) + ((hash << 5) - hash);
  }
  return FALLBACK_GRADIENTS[Math.abs(hash) % FALLBACK_GRADIENTS.length];
}