/*
* This function calculates the total price of a new order
* @param {Array} products cartProduct: Array of Objects
* @returns {number} Total price
*/

export const calculateTotalPrice = (products) => {
  return products.reduce((total, product) => {
    return total + product.price
  }, 0)
}
