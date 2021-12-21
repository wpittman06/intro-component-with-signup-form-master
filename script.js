const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '') {
        addErrorTo('firstname', 'First name is required')
    } else {
        removeErrorFrom('firstname')
    }

    if (lastName === '') {
        addErrorTo('lastname', 'Last name is required')
    } else {
        removeErrorFrom('lastname')
    }

    if (password === '') {
        addErrorTo('password', 'Password is required')
    } else {
        removeErrorFrom('password')
    }
})