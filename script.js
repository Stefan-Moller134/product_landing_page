// Fee Calculator
const days = document.getElementById('days');
const cats = document.getElementById('cats');
const calcBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const totalfee = document.getElementById('total-fee');
const mailToLink = document.querySelector('[href="mailto:"]');

// Prices for different number of cats
const fees = [300, 450, 700, 1000];

function calculateTotalFee() {
    const catCount = Number(cats.value);
    const total = fees[Math.min(catCount, 4) - 1] * Number(days.value);

    if (total < 0) {
        totalfee.innerHTML = `<span class="invalid">Deposit cannot be greater than the total fee </span>`;
        return;
    }

    if (isNaN(catCount) || catCount < 1) {
        totalfee.innerHTML = `<span class="invalid">Please enter a valid number of cats (>=1) </span>`;
        return;
    }

    totalfee.innerHTML = `Your Total Is: Php <b>${total}</b>`;
}

calcBtn.addEventListener('click', calculateTotalFee);


function resetForm() {
    days.value = 1;
    cats.value = 1;
    totalfee.innerHTML = '';
}

resetBtn.addEventListener('click', resetForm);

const mailto = 'maimaicatsitter.co.za';
mailToLink.href = 'mailto:' + mailto.replace('_', '@');