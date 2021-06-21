/**
 * * Long Method
 */

const dirtyComputePrice = (): number => {
  const items = Array(10)
    .fill(0)
    .map(() => ({ price: Math.random() * 10 }));

  const itemsPriceSum = items.reduce(
    (priceSum, item) => priceSum + item.price,
    0
  );

  const finalPrice = itemsPriceSum * 0.8;

  return finalPrice;
};
