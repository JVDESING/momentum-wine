const btnCart = document.querySelector('.contenedor-icono');
const containerCartProducts = document.querySelector('.container-cart-products');

if (btnCart && containerCartProducts) {
  btnCart.addEventListener("click", () => {
    containerCartProducts.classList.toggle("hidden-cart");
    console.log("🛒 Toggle aplicado a container-cart-products");
  });
}