"use strict"
function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    return [-b / (2 * a)];
  } else {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    return [
      (-b + sqrtDiscriminant) / (2 * a),
      (-b - sqrtDiscriminant) / (2 * a)
    ];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = (percent / 100) / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));
  const totalAmount = monthlyPayment * countMonths;
  const roundedTotalAmount = parseFloat(totalAmount.toFixed(2));
  return roundedTotalAmount;
}