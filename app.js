function updateProductNumber(getInputId, isAdd, totalAmount, price) {
  const productInput = document.getElementById(getInputId);
  let ProductQuatityNumber = productInput.value;
  if (isAdd == true) {
    ProductQuatityNumber = parseInt(ProductQuatityNumber) + 1;
  } else if (ProductQuatityNumber > 0) {
    ProductQuatityNumber = parseInt(ProductQuatityNumber) - 1;
  }
  productInput.value = ProductQuatityNumber;
  const productPrice = document.getElementById(totalAmount);
  productPrice.innerText = ProductQuatityNumber * price;
  calculateTotal();
}

function getInputValue(getInputId) {
  const productInputNumber = document.getElementById(getInputId);
  const productNumber = parseInt(productInputNumber.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phoneInput") * 1290;
  const caseTotal = getInputValue("caseInput") * 59;
  let subTotal = phoneTotal + caseTotal;
  let taxTotal = subTotal / 10;
  let productTotalAmount = taxTotal + subTotal;
  document.getElementById("subTotalAmount").innerText = subTotal;
  document.getElementById("taxAmount").innerText = taxTotal;
  document.getElementById("totalAmount").innerText = productTotalAmount;
}
/*****phone field handle *******/
document.getElementById("phone-plus-button").addEventListener("click", function () {
  updateProductNumber("phoneInput", true, "phone-amount", 1290);
});
document.getElementById("phone-minus-button").addEventListener("click", function () {
  updateProductNumber("phoneInput", false, "phone-amount", 1290);
});
/***** case field handle *******/
document.getElementById("case-plus-button").addEventListener("click", function () {
  updateProductNumber("caseInput", true, "case-amount", 59);
});
document.getElementById("case-minus-button").addEventListener("click", function () {
  updateProductNumber("caseInput", false, "case-amount", 59);
});
