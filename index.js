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
// When the form with id "form-validate" is submitted,
// - prevent the default event from firing
// - check the length of the input with id "form-validate-first-name"
// - if the length is greater than 2, add "is-valid" class to the input, remove the "is-invalid" class
// - if the length if less than 2, add "is-invalid" class to the input, remove the "is-valid" class

const form = document.querySelector('#form-validate');
const firstName = document.querySelector('#form-validate-first-name');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (firstName.value.length > 2) {
        firstName.classList.add('is-valid');
        firstName.classList.remove('is-invalid');
    } else {
        firstName.classList.add('is-invalid');
        firstName.classList.remove('is-valid');
    }
});

// Challenge: Lists
// When the form with the id "form-hobby" is submitted
// - prevent default events from firing
// - get the value from the input with the id "form-hobby-text"
// - use the vlaue to create a new li with the class "list-group-item"
// - add the li to the ul with the id "hobby-list"



// Challenge: Lists (Part 2)
// When the ul with the id "hobby-list-2" is clicked
// - check if the event target has the class "remove-hobby", if it does
//      - prevent the default event
//      - get the parent li of the target
//      - remove the parent li from the list with the id "hobby-list-2"