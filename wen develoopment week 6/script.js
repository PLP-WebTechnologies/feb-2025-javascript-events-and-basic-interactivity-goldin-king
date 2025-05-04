// Button Click: Change color of the button
document.getElementById("colorChangeBtn").addEventListener("click", function() {
    this.style.backgroundColor = "blue";
});

// Hover Effect
const hoverDiv = document.getElementById("hoverEffectDiv");
hoverDiv.addEventListener("mouseenter", function() {
    hoverDiv.style.backgroundColor = "lightcoral";
});
hoverDiv.addEventListener("mouseleave", function() {
    hoverDiv.style.backgroundColor = "lightgray";
});

// Keypress Detection
const keypressInput = document.getElementById("keypressInput");
keypressInput.addEventListener("keypress", function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Double Click Action
const doubleClickArea = document.getElementById("doubleClickArea");
doubleClickArea.addEventListener("dblclick", function() {
    alert("Double-click detected!");
});

// Image Gallery: Change image on click
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(item => {
    item.addEventListener("click", function() {
        alert(`You clicked on ${this.alt}`);
    });
});

// Form Validation (Check email format and password length)
document.getElementById("myForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        alert("Please enter a valid email.");
        event.preventDefault();
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        event.preventDefault();
    }
});
