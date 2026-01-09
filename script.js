const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const btn = document.getElementById("calcBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    const bill = Number(billInput.value);
    const tipPercent = Number(tipInput.value);

    if (!bill || !tipPercent) {
        result.textContent = "Please enter both bill amount and tip percentage.";
        return;
    }

    const tip = bill * (tipPercent / 100);
    const total = bill + tip;

    result.textContent = `Tip: £${tip.toFixed(2)} | Total: £${total.toFixed(2)}`;
});