function getNumber(inputId, isAdd, amount, price) {
  const numberInput = document.getElementById(inputId);
  let numberValue = numberInput.value;
  const productNumber = parseInt(numberValue);
  if (isAdd == true) {
    numberValue = productNumber + 1;
  } else if(numberValue > 0){
    numberValue = productNumber - 1;
  }
  numberInput.value = numberValue;

  const updateAmount = document.getElementById(amount); 
  updateAmount.innerText = numberValue * price;
  totalAmount()
}

function updatetotalAmount(number){
  const totalNumber = document.getElementById(number);
  const updateTotalNumber= parseInt(totalNumber.value);
  return updateTotalNumber;
}
function totalAmount(){
  const updatePhoneTotal = updatetotalAmount('phoneInput') * 1219;
  const updateCaseTotal = updatetotalAmount('caseInput') * 59; 

  const subTotal = updatePhoneTotal + updateCaseTotal;
  const tax = subTotal / 10; 
  const total = subTotal + tax; 
  document.getElementById('subTotalAmount').innerText = subTotal; 
  document.getElementById('taxAmount').innerText = tax; 
  document.getElementById('totalAmount').innerText = total;        
} 

document.getElementById("phone-plus-button").addEventListener("click", function () {
  getNumber("phoneInput", true, 'phone-amount', 1219);
});
document.getElementById("phone-minus-button").addEventListener("click", function () {
  getNumber("phoneInput", false, 'phone-amount', 1219);
});

document.getElementById('case-plus-button').addEventListener('click', function(){
  getNumber('caseInput', true, 'case-amount', 59)
})
document.getElementById('case-minus-button').addEventListener('click', function(){
  getNumber('caseInput', false, 'case-amount', 59)
})