//money withdraw
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //new amount from input field 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    // withdrawy money 
    const withdrawMoney = document.getElementById('withdraw-money')
    const previousWithdrawMoneyString = withdrawMoney.innerText;
    const previousWithdrawMoney = parseFloat(previousWithdrawMoneyString);

    //number validation
    if (isNaN(newWithdrawAmount)) {
        alert('Please Enter Valid Number')
        return;
    }


    //total balance 
    const totalBalance = document.getElementById('total-balance')
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    //over amount validation
    if (newWithdrawAmount > previousTotalBalance) {
        alert('You take over your balance')
        return
    }

    //calculation new amouny & withdray money
    const totalWithdraw = previousWithdrawMoney + newWithdrawAmount;

    withdrawMoney.innerText = totalWithdraw;




    const newTotalBalance = previousTotalBalance - newWithdrawAmount;


    totalBalance.innerText = newTotalBalance;

}) 