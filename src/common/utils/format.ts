export const capitalize = (value: string): string =>
  value ? value.charAt(0).toUpperCase() + value.slice(1) : '';

export const formatPrice = (price: number): string =>
  `€${price.toFixed(2).replace('.', ',')}`;

export const formatLocation = (location: string): string =>
  location
    .split(',')
    .map(part => part.trim())
    .reverse()
    .join(', ');
