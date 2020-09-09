// Buttons

// Mouse Over
const toggleLight = document.querySelector("#light-bulb");
toggleLight.onmouseenter = () => {
    toggleLight.src = "images/light-bulb-on.png";
}
toggleLight.onmouseleave = () => {
    toggleLight.src = "images/light-bulb-off.png";
}

// Toggle
function toggleAlert() {
    let toggleAlert = document.querySelector("#toggle-alert");
    let alertButton = document.querySelector("#toggle-button");
    if (toggleAlert.innerHTML === "Hello World!") {
        (toggleAlert.innerHTML = " ") && (alertButton.innerHTML = "Off");
    } else {
        (toggleAlert.innerHTML = "Hello World!") && (alertButton.innerHTML = "On");
    }
}

// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side


// Challenge: Lists

// Challenge: Lists (Part 2)
