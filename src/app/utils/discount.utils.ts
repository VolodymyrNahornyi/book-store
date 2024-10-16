export function getDiscountPercentage(price: number, discountPrice: number | undefined): number {
  if (discountPrice) {
    return Math.round(100 - (discountPrice / price) * 100);
  }
  return price;
}
