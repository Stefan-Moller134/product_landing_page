// Total Fee Calculator
const days = document.getElementById('days');
const deposit = document.getElementById('deposit');
const cats = document.getElementById('cats');
const calcBtn = document.getElementById('calc-btn');
const clearBtn = document.getElementById('clear-btn');
const totalfee = document.getElementById('total-fee');
let total = 0;

// Prices for different number of cats
const fees = [300, 450, 700, 1000];

// Calculate total fee
function calculate() {
    const catCount = Number(cats.value);

    let total = fees[Math.min(catCount, 4) - 1] * Number(days.value) - Number(deposit.value);

    if (total < 0) {
        totalfee.innerHTML = `<span class="invalid">Deposit cannot be greater than the total fee </span>`;
        return;
    }

    if (days.value === '' || deposit.value === '') {
        totalfee.innerHTML = `<span class="invalid">Please fill all the fields </span>`;
        return;
    }

    if (isNaN(catCount) || catCount < 1) {
        totalfee.innerHTML = `<span class="invalid">Please enter a valid number of cats (>=1) </span>`;
        return;
    }


    totalfee.innerHTML = `<span class="total">Your Total Is: Php <b>${total}</b> </span>`;
}

calcBtn.addEventListener('click', calculate);

// Clear the form
function clearForm() {
    days.value = '';
    deposit.value = '';
    cats.value = '';
    totalfee.innerHTML = '';
}

clearBtn.addEventListener('click', clearForm);


// Get email adress
const email = document.getElementById('email');
const emailBtn = document.getElementById('email-btn');
const emailOutput = document.getElementById('email-output');

function getEmail() {
    if (email.value === '') {
        emailOutput.innerHTML = `<span class="invalid">Please enter your email address </span>`;
        return;
    }

    var destinationEmail = "stefanmoller134@gmail.com";
    window.location.href = `mailto:${destinationEmail}?subject=Contact&body=Message from ${email.value}`;

    emailOutput.innerHTML = `<span class="valid">Your email address is: ${email.value} </span>`;
}

emailBtn.addEventListener('click', getEmail);