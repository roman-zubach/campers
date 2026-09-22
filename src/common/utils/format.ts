export const capitalize = (value: string): string =>
  value ? value.charAt(0).toUpperCase() + value.slice(1) : '';

/** 8000 → "€8000,00" — price is stored as a single number, shown with a comma. */
export const formatPrice = (price: number): string =>
  `€${price.toFixed(2).replace('.', ',')}`;

/** API returns "Ukraine, Kyiv"; the design shows "Kyiv, Ukraine". */
export const formatLocation = (location: string): string =>
  location
    .split(',')
    .map(part => part.trim())
    .reverse()
    .join(', ');
