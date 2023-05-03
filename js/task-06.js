const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const length = input.getAttribute("data-length");
  if (input.value.length == length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});

