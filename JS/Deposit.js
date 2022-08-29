document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the inputfield value
    const depositInputField = document.getElementById('Deposit-input-field')
    const NewDepositValueString = depositInputField.value
    const NewDepositValue = parseFloat(NewDepositValueString)

    // step-3: get the deposit Show field
    const depositShowField = document.getElementById('deposit-field');
    const alreadyDepositedAmountString = depositShowField.innerText;
    const alreadyDepositedAmount = parseFloat(alreadyDepositedAmountString);

    // step 4: connect deposit input with deposit show field and calculate.

    const currentTotalAmount = alreadyDepositedAmount + NewDepositValue

    depositShowField.innerText = currentTotalAmount

    // step 5: get balance field
    const BalanceShowField = document.getElementById('Balance-field')
    const BalancedAmountString = BalanceShowField.innerText
    const BalancedAmount = parseFloat(BalancedAmountString);

    // step 6: let calculate with deposit & main Balance
    const currentBalance = BalancedAmount + NewDepositValue;
    BalanceShowField.innerText = currentBalance;

    // common step: 
    depositInputField.value= '';
})