// 1. withdraw button a click handler add korte hobe
// Step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Step-2
  const totalWithdrawAmount = document.getElementById("withdraw-amount");
  const totalWithdrawString = totalWithdrawAmount.value;
  const newTotalWithdraw = parseFloat(totalWithdrawString);

  // Step-7
  totalWithdrawAmount.value = "";

  if (isNaN(newTotalWithdraw)) {
    alert("Please input a valid number");
    return;
  }

  //   get previous withdraw total
  // Step-3
  const totalWithdrawElement = document.getElementById("withdraw-total");
  const previoustTotalWithdrawString = totalWithdrawElement.innerText;
  const previousWithdrawTotal = parseFloat(previoustTotalWithdrawString);

  // Step-5
  //   previous balance total nibo
  const previousBalanceTotalWithdraw = document.getElementById("balance-total");
  const balanceTotalWithdrawString = previousBalanceTotalWithdraw.innerText;
  const totalWithdrawBalance = parseFloat(balanceTotalWithdrawString);

  if (newTotalWithdraw > totalWithdrawBalance) {
    alert("Baaper Bank a eto taka nai");
    return;
  }

  // Step-4
  //   withdraw total and current total ber korte hobe
  const currentTotalWithdrawAmount = newTotalWithdraw + previousWithdrawTotal;
  //   last step amra withdraw er okhane man ta set korte hobe
  totalWithdrawElement.innerText = currentTotalWithdrawAmount;

  // Step-6
  const newBalanceTotal = totalWithdrawBalance - newTotalWithdraw;
  previousBalanceTotalWithdraw.innerText = newBalanceTotal;
});
