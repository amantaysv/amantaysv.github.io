const form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("form-status");
  const btn = document.getElementById("contact-submit");
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
      btn.classList.remove("active");
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
  setTimeout(() => {
    status.textContent = "";
  }, 5000);
}
form.addEventListener("submit", handleSubmit);

document.querySelectorAll(".button").forEach((button) => {
  let getVar = (variable) =>
    getComputedStyle(button).getPropertyValue(variable);
  button.addEventListener("click", (e) => {
    setTimeout(() => {
      if (!button.classList.contains("active")) {
          button.classList.add("active");
        gsap.to(button, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(button, {
                  "--left-wing-first-y": 0,
                  "--left-wing-second-x": 40,
                  "--left-wing-second-y": 100,
                  "--left-wing-third-x": 0,
                  "--left-wing-third-y": 100,
                  "--left-body-third-x": 40,
                  "--right-wing-first-x": 50,
                  "--right-wing-first-y": 0,
                  "--right-wing-second-x": 60,
                  "--right-wing-second-y": 100,
                  "--right-wing-third-x": 100,
                  "--right-wing-third-y": 100,
                  "--right-body-third-x": 60,
                });
              },
            },
            {
              "--left-wing-third-x": 20,
              "--left-wing-third-y": 90,
              "--left-wing-second-y": 90,
              "--left-body-third-y": 90,
              "--right-wing-third-x": 80,
              "--right-wing-third-y": 90,
              "--right-body-third-y": 90,
              "--right-wing-second-y": 90,
              duration: 0.2,
            },
            {
              "--rotate": 50,
              "--left-wing-third-y": 95,
              "--left-wing-third-x": 27,
              "--right-body-third-x": 45,
              "--right-wing-second-x": 45,
              "--right-wing-third-x": 60,
              "--right-wing-third-y": 83,
              duration: 0.25,
            },
            {
              "--rotate": 55,
              "--plane-x": -8,
              "--plane-y": 24,
              duration: 0.2,
            },
            {
              "--rotate": 40,
              "--plane-x": 45,
              "--plane-y": -180,
              "--plane-opacity": 0,
              duration: 0.3,
              onComplete() {
                setTimeout(() => {
                  button.removeAttribute("style");
                  gsap.fromTo(
                    button,
                    {
                      opacity: 0,
                      y: -8,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        button.classList.add("active");
                      },
                    }
                  );
                }, 2000);
              },
            },
          ],
        });

        gsap.to(button, {
          keyframes: [
            {
              "--text-opacity": 0,
              "--box-shadow-20": 0,
              "--border-top": 0,
              "--border-left": 0,
              "--border-radius": 0,
              "--plane-opacity": 1,
              "--background-color": 0,
              "--bg-hover": 0,
              "--left-wing-background": getVar("--primary-darkest"),
              "--right-wing-background": getVar("--primary-darkest"),
              duration: 0.1,
            },
            {
              "--left-wing-background": getVar("--primary"),
              "--right-wing-background": getVar("--primary"),
              duration: 0.1,
            },
            {
              "--left-body-background": getVar("--primary-dark"),
              "--right-body-background": getVar("--primary-darkest"),
              duration: 0.4,
            },
            {
              "--success-opacity": 1,
              "--success-scale": 1,
              duration: 0.55,
              delay: 0.25,
            },
          ],
        });
      }
    }, 1000);
  });
});
