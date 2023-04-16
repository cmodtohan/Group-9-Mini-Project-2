// initialize cart and total price
let cart = {};
let totalPrice = 0;

// select all add to cart buttons
let addToCartButtons = document.querySelectorAll(".add-to-cart");

// add event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    // get item details
    let card = button.closest(".cards");
    let itemId = card.id;
    let itemDescription = card.querySelector(".description").textContent;
    let itemPrice = parseFloat(card.querySelector(".price").textContent.replace("Php ", ""));
    
    // check if item is already in cart
    if (itemId in cart) {
      cart[itemId].quantity++;
      cart[itemId].subtotal = cart[itemId].quantity * itemPrice;
    } else {
      cart[itemId] = {
        description: itemDescription,
        price: itemPrice,
        quantity: 1,
        subtotal: itemPrice
      };
    }
    
    // update total price
    totalPrice += itemPrice;
    document.querySelector("#total-price").textContent = `Total: Php ${totalPrice.toFixed(2)}`;
  });
});

// select checkout button
let checkoutButton = document.querySelector("#checkout");

// add event listener to checkout button
checkoutButton.addEventListener("click", () => {
  // check if cart is empty
  if (Object.keys(cart).length === 0) {
    alert("Your cart is empty!");
  } else {
    // create order summary
    let orderSummary = "Order Summary:\n\n";
    for (let item in cart) {
      orderSummary += `${cart[item].description} x ${cart[item].quantity} = Php ${cart[item].subtotal.toFixed(2)}\n`;
    }
    orderSummary += `\nTotal: Php ${totalPrice.toFixed(2)}`;
    
    // display order summary and ask for confirmation
    if (confirm(orderSummary)) {
      // clear cart and total price
      cart = {};
      totalPrice = 0;
      document.querySelector("#total-price").textContent = `Total: Php ${totalPrice.toFixed(2)}`;
    }
  }
});
