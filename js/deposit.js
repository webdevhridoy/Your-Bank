// step number -1: button ke add event handler korechi
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: ekhon amora amount take ber korbo input field theke

  const depositAmount = document.getElementById("deposit-amount");
  const newDepositValueString = depositAmount.value;
  const newDepositValue = parseFloat(newDepositValueString);

  //   step-3: deposti total koto tuku ache seta ber korbo
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  //   step -4: sum korechi notun and purber value er sathe
  const curentDepositAmount = previousDepositTotal + newDepositValue;

  depositTotalElement.innerText = curentDepositAmount;

  //   step-5: amra balance parbo

  const balanceTotalElement = document.getElementById("balance-total");
  const previoutBalanceTotalString = balanceTotalElement.innerText;
  const previousTotalBalance = parseFloat(previoutBalanceTotalString);

  //   step-6: calcualte current total balance

  const currentTotalBalance = previousTotalBalance + newDepositValue;
  balanceTotalElement.innerText = currentTotalBalance;

  //   extra step to clear the value after submit the button
  depositAmount.value = "";
});
