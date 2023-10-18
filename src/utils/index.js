/**
 * This function calculates the total price of all products in cart
 * @param { Array } cartProducts cartProduct: Array of Objects
 * @returns { Number } total: Total price of all products in cart
 */

const totalPrice = (cartProducts) => {
  let total = 0;
  cartProducts.forEach((product) => {
    total += product.price;
  });
  return total;
};

export { totalPrice };
