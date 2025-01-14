export const cart = [];

function isProductInCart(product, _cart = cart) {
  for (const item of _cart) { 
    console.log(item);
    if (product.productId === item.productId) {
      return true; 
    }
  }
  return false; 
}

export function addProductToCart(product) {
  if (isProductInCart(product, cart)) {
    if(product.quantity < 10){
      const existingProduct = cart.find(item => item.productId === product.productId); 
      existingProduct.quantity += product.quantity; 
    }
  } else {
    cart.push(product); 
  }
}