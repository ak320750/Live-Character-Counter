const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");



textInput.addEventListener("input", () => {
      const length = textInput.value.length;
      charCount.textContent = `Characters: ${length}`;

      if (length > 50) {
        charCount.classList.add("limit");
        charCount.classList.remove("counter");
      } else {
        charCount.classList.add("counter");
        charCount.classList.remove("limit");
      }
    });