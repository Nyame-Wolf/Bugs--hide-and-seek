const myRegex = /[A-Z]/;
const form = document.querySelector('.dsk-form');
form.addEventListener('submit', (event) => {
    const { email } = form.elements;
    const emailEntered = email.value;
    const errM = document.querySelector('.errorMessage');
    if (myRegex.test(emailEntered === true))
    {
        event.preventDefault();
        const message = 'Email field should only have <strong>lowercase</strong> letters';
        if (message !== '')
        {
            errM.innerHTML = message;

        }
    }
});