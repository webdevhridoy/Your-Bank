// 1. withdraw button a click handler add korte hobe

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const totalWithdrawAmount = document.getElementById("withdraw-amount");
  const totalWithdrawString = totalWithdrawAmount.value;
  const NewtotalWithdraw = parseFloat(totalWithdrawString);

  //   get previous withdraw total

  const totalWithdrawElement = document.getElementById("withdraw-total");
  const previoustTotalWithdrawString = totalWithdrawElement.innerText;
  const previousWithdrawTotal = parseFloat(previoustTotalWithdrawString);

  //   withdraw total and current total ber korte hobe
  const currentTotalWithdrawAmount = NewtotalWithdraw + previousWithdrawTotal;

  //   last step amra withdraw er okhane man ta set korte hobe

  totalWithdrawElement.innerText = currentTotalWithdrawAmount;

  //   previous balance total nibo
  const previousBalanceTotalWithdraw = document.getElementById("balance-total");
  const balanceTotalWithdrawString = previousBalanceTotalWithdraw.innerText;
  const totalWithdrawBalance = parseFloat(balanceTotalWithdrawString);

  const newBalanceTotal = totalWithdrawBalance - NewtotalWithdraw;
  previousBalanceTotalWithdraw.innerText = newBalanceTotal;
  totalWithdrawAmount.value = "";
});
