//elements to change style when there is a error
const input = document.getElementById('email');
const label = document.getElementsByTagName('label')[0];

//pattern to validate email
const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//function to validate email using html5 and the pattern
function emailIsValid(email) {
    if (email.checkValidity() && pattern.test(email.value.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

//remove the error message when the users changes anything in the input field
//I used the input event because focus conflicts to browser's error message itself
email.addEventListener('input', () => {
    input.classList.remove('input-error');
    label.classList.remove('label-error');
});


//show error message if any of input fields are empty or if the email is invalid
document.getElementById('submit-button').addEventListener('click', () => {
    isValid = emailIsValid(input);
    if (input.value == '' || !isValid) {
        input.classList.add("input-error");
        label.classList.add('label-error');
    }

});