const from = document.getElementById('from');
const to = document.getElementById('to');  
const amount = document.getElementById('amount');  
const output = document.getElementById('output');  

const rates = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.77,
  JPY: 144.25,
  AUD: 1.51,
  CAD: 1.34,
  CHF: 0.85,
  CNY: 7.23,
  INR: 83.12,
  NZD: 1.63,
  SGD: 1.34,
  HKD: 7.82,
  KRW: 1330.50,
  BRL: 5.12,
  ZAR: 18.25,
  RUB: 92.14,
  MXN: 16.82,
  THB: 35.12,
  IDR: 15500.25,
  SAR: 3.75,
  AED: 3.67
};


Object.keys(rates).forEach(curr => {
  const option1 = document.createElement('option');
  option1.value = curr;
  option1.textContent = curr;
  from.appendChild(option1);

  const option2 = document.createElement('option');
  option2.value = curr;
  option2.textContent = curr;
  to.appendChild(option2);
});


from.value = "USD";
to.value = "INR";

function calculate() {
  const amt = parseFloat(amount.value);
  if (isNaN(amt) || amt <= 0) {
    output.textContent = "Enter a valid amount";
    return;
  }

  const res = (amt / rates[from.value]) * rates[to.value];
  console.log(res);
  output.value = `${amt} ${from.value} = ${res.toFixed(2)} ${to.value}`;
}
