document.querySelectorAll(".questionContainer").forEach((container) => {
  container.addEventListener("click", () => {
    const answer = container.nextElementSibling; // Get the corresponding answer
    const icon = container.querySelector(".toggleIcon"); // Get the toggle icon

    if (answer.style.display === "block") {
      answer.style.display = "none"; // Hide the answer
      icon.src = "assets/images/icon-plus.svg"; // Change to plus icon
    } else {
      answer.style.display = "block"; // Show the answer
      icon.src = "assets/images/icon-minus.svg"; // Change to minus icon
    }
  });
});
