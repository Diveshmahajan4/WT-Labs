document.addEventListener("DOMContentLoaded", () => {
  const unitsUsed = document.getElementById("unitsUsed");
  const unitsBtn = document.getElementById("unitsBtn");
  const answer = document.getElementById("answer");

  unitsBtn.addEventListener("click", () => {
    calculateBill();
  });

  function calculateBill() {
    const units = parseFloat(unitsUsed.value);
    let billAmount = 0;

    if (units <= 50) {
      billAmount = units * 3.5;
      answer.innerText = `Units less than 50 billing is Rs. ${billAmount} \n 
                            Your total billing amount is Rs. ${billAmount.toFixed(
                              2
                            )}`;
    } else if (units <= 150) {
      billAmount = 50 * 3.5 + (units - 50) * 4;
      answer.innerText = `Units less than 50 billing is Rs. ${50 * 3.5} \n
                          Units less than 150 billing is Rs. ${
                            (units - 50) * 4
                          } \n 
                            Your total billing amount is Rs. ${billAmount.toFixed(
                              2
                            )}`;
    } else if (units <= 250) {
      billAmount = 50 * 3.5 + 100 * 4 + (units - 150) * 5.2;
      answer.innerText = `Units less than 50 billing is Rs. ${50 * 3.5} \n 
      Units less than 150 billing is Rs. ${100 * 4} \n 
      Units less than 250 billing is Rs. ${(units - 150) * 5.2} \n 
      Your total billing amount is Rs. ${billAmount.toFixed(2)}`;
    } else {
      billAmount = 50 * 3.5 + 100 * 4 + 100 * 5.2 + (units - 250) * 6.5;
      answer.innerText = `Units less than 50 billing is Rs. ${50 * 3.5} \n
                          Units less than 150 billing is Rs. ${100 * 4} \n 
                          Units less than 250 billing is Rs. ${100 * 5.2} \n 
                          Units greater than 250 billing is Rs. ${
                            (units - 250) * 6.5
                          } \n 
                          Your total billing amount is Rs. ${billAmount.toFixed(
                            2
                          )}`;
    }
  }
});
