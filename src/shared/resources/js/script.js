export function confirmPayment() {
  fetch("/payments/confirm", {
    method: 'POST'
  }).then(redirectOk);
}

export function cancelPayment() {
  fetch("/payments/cancel", {
    method: 'POST'
  }).then(redirectOk);
}

function redirectOk(x) {
  window.location.href = "/payments/ok";
}