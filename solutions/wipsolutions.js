// Buttons
const displayNameButton = document.querySelector('#display-name-button');

displayNameButton.addEventListener('click', () => {
    const displayName = document.querySelector('#display-name');
    displayName.classList.remove('invisible');
});

// Mouse Over
const toggleLight = document.querySelector("#light-bulb");
toggleLight.onmouseenter = () => {
    toggleLight.src = "images/light-bulb-on.png";
}
toggleLight.onmouseleave = () => {
    toggleLight.src = "images/light-bulb-off.png";
}

// Toggle
let isToggled = false;

const toggleButton = document.querySelector('#toggle-button');
const toggleAlert = document.querySelector('#toggle-alert');

toggleButton.addEventListener('click', () => {
    toggleAlert.classList.toggle('invisible');
    if (isToggled) {
        isToggled = false;
        toggleButton.innerHTML = 'On';
    } else {
        isToggled = true;
        toggleButton.innerHTML = 'Off';
    }
})


// toggleButton.addEventListener('click', () => {
//     if (isToggled) {
//         isToggled = false;
//         toggleAlert.classList.add('invisible');
//         toggleButton.innerHTML = 'On';
//     } else {
//         isToggled = true;
//         toggleAlert.classList.remove('invisible');
//         toggleButton.innerHTML = 'Off';
//     }
// })


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
        firstName.classList.add('is-invalid')
        firstName.classList.remove('is-valid');
    }
});

// Challenge: Lists

const formHobby = document.querySelector('#form-hobby');
const formHobbyText = document.querySelector('#form-hobby-text');
const listHobby = document.querySelector('#hobby-list');
const clearField = document.querySelector('#form-hobby-text').placeholder = ("hobby")

formHobby.addEventListener('submit', (event) => {
    // - prevent default events from firing
    event.preventDefault();

    const addHobby = document.createElement('li');
    // - get the value from the input with the id "form-hobby-text"
    addHobby.innerText = formHobbyText.value;
    // - use the value to create a new li with the class "list-group-item"
    addHobby.classList.add('list-group-item')
        // - add the li to the ul with the id "hobby-list"
    listHobby.appendChild(addHobby);
    // clear form field back to placeholder
    formHobby.reset()
})

// Challenge: Lists (Part 2)
const listHobby2 = document.querySelector('#hobby-list-2');

// When the ul with the id "hobby-list-2" is clicked
listHobby2.addEventListener('click', (event) => {
    // check if the event target has the class "remove-hobby", if it does
    if (event.target.classList.contains('remove-hobby')) {
        // prevent the default event
        event.preventDefault();
        // get the parent li of the target
        const parentLi = event.target.parentElement;
        listHobby2.removeChild(parentLi)
    }

})



//      - remove the parent li from the list with the id "hobby-list-2"