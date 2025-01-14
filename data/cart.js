export const cart = [
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  },
];

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