const form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  const btn = document.getElementById('contact-submit');
  const status = document.getElementById("form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.textContent = "Thanks for your submission!";
      // btn.textContent = 'kek'
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
