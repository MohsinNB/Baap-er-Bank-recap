// step 1: get the withdraw button and set event handler on it
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2: get the input field
    const getWithdrawInputField = document.getElementById('withdraw-input-field');
    const NewWithdrawValueString = getWithdrawInputField.value
    const NewWithdrawValue = parseFloat(NewWithdrawValueString);

    // validation

    getWithdrawInputField.value = '';

    if (isNaN(NewWithdrawValue)) {
        alert('Please provide a valid number')
        return;
    }

    // step 3 get the withdraw show field

    const withdrawShowField = document.getElementById('withdraw-field');
    const withdrawedAmountString = withdrawShowField.innerText;
    const withdrawedAmount = parseFloat(withdrawedAmountString);

    // step 5: get  main balance field

    const mainBalance = document.getElementById('Balance-field')
    const mainBalanceValue = mainBalance.innerText;

    // common step:


    if (NewWithdrawValue > mainBalanceValue) {
        alert('you have no balance to withdraw.please deposit')
        return;
    }



    // step 4: LET show on the w-show field

    const currentWithdrawAmount = withdrawedAmount + NewWithdrawValue;
    withdrawShowField.innerText = currentWithdrawAmount;


    // step 6 :  calculate with main balance

    const currentBalance = mainBalanceValue - NewWithdrawValue;
    mainBalance.innerText = currentBalance;


})