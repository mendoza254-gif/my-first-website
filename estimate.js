const form = document.getElementById("calculator");
const inputs = form.querySelectorAll("input");
const error = document.getElementById("error");
const estimate = document.getElementById("estimate");
const amounts = document.getElementById("amounts");
const money = new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD", maximumFractionDigits: 0
});

function clearFeedback() {
  error.textContent = "";
  estimate.hidden = true;
  amounts.replaceChildren();
  for (const input of inputs) {
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
  }
}

function showError(message, input) {
  error.textContent = message;
  input.setAttribute("aria-invalid", "true");
  input.setAttribute("aria-describedby", "error");
  input.focus();
}

function addAmount(label, dollars) {
  const row = document.createElement("div");
  row.className = "amount";
  const name = document.createElement("span");
  const price = document.createElement("span");
  name.textContent = label;
  price.textContent = money.format(dollars);
  row.append(name, price);
  amounts.append(row);
}

form.addEventListener("input", clearFeedback);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearFeedback();
  const selected = [];
  let total = 0n;

  for (const input of inputs) {
    const name = input.labels[0].firstChild.textContent;
    if (!/^[0-9]+$/.test(input.value)) {
      showError("For " + name + ", enter a whole number using digits 0–9.", input);
      return;
    }
    const quantity = BigInt(input.value);
    if (quantity > 0n) {
      const subtotal = quantity * BigInt(input.dataset.rate);
      selected.push({ name, subtotal });
      total += subtotal;
    }
  }

  if (selected.length === 0) {
    showError("Enter at least one fan, door, or shower.", inputs[0]);
    return;
  }
  for (const service of selected) {
    addAmount(service.name, service.subtotal);
  }
  addAmount("Combined total", total);
  estimate.hidden = false;
});
