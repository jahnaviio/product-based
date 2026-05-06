function toggleDetails(button) {
  const currentDetails = button.nextElementSibling;
  const allDetails = document.querySelectorAll(".details");
  const allButtons = document.querySelectorAll(".product-card button");

  allDetails.forEach((details) => {
    if (details !== currentDetails) {
      details.style.display = "none";
    }
  });

  allButtons.forEach((btn) => {
    if (btn !== button) {
      btn.textContent = "View Details";
    }
  });

  if (currentDetails.style.display === "block") {
    currentDetails.style.display = "none";
    button.textContent = "View Details";
  } else {
    currentDetails.style.display = "block";
    button.textContent = "Hide Details";
  }
}

function toggleBrands(event) {
  event.preventDefault();

  const dropdown = document.getElementById("brandDropdown");

  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}