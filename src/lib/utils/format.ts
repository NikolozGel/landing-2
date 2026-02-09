export const formatPrice = (price: number) => {
  return price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export function formatCompactPrice(value: number) {
  if (!Number.isFinite(value)) return "0";

  const absValue = Math.abs(value);

  if (absValue >= 1_000_000_000_000)
    return (value / 1_000_000_000_000).toFixed() + "T";
  if (absValue >= 1_000_000_000) return (value / 1_000_000_000).toFixed() + "B";
  if (absValue >= 1_000_000) return (value / 1_000_000).toFixed() + "M";
  if (absValue >= 1_000) return (value / 1_000).toFixed() + "K";
  if (absValue >= 100) return value.toFixed();

  // პატარა ფასები – ზუსტად ის, რაც არის
  return value.toString();
}

export function formatCompactPriceK(value: number) {
  if (value === null || value === undefined) return "0";

  const absValue = Math.abs(value);
  let formatted: string;

  if (absValue >= 1000) {
    formatted =
      (value / 1000).toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }) + "K";
  } else if (absValue >= 100) {
    formatted = value.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  } else {
    formatted = value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return formatted;
}
