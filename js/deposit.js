//money deposit 

document.getElementById('btn-deposit').addEventListener('click', function () {
    //new deposit money
    const depositAmount = document.getElementById('deposit-field');
    const newDepositAmountString = depositAmount.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositAmount.value = '';
    if (isNaN(newDepositAmount)) {
        alert('Please Enter Valid Number')
        return
    }
    //previous deposit money
    const depositMoney = document.getElementById('deposit-money');
    const previousdepositMoneyString = depositMoney.innerText;
    const previousdepositMoney = parseFloat(previousdepositMoneyString);

    //calculation new & previous deposit money
    const totalDepositMoney = previousdepositMoney + newDepositAmount;
    //set new added money
    depositMoney.innerText = totalDepositMoney;
    //clear deposit fill after take money


    //main balance
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    //update main balance


    const newMainBalance = previousTotalBalance + newDepositAmount;

    totalBalance.innerText = newMainBalance;
})