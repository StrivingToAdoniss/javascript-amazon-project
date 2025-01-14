export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1
    },
  ];
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

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

  saveToStorage();
}

export function removeProductFromCart(productId, _cart = cart){
  for (let i = cart.length - 1; i >= 0; i--) {
    if (cart[i].productId === productId) {
      cart.splice(i, 1); // Remove the product from the array in place
    }
  }

  saveToStorage();
}