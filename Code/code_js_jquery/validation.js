// Add event listener to button
document.querySelector('#submit').addEventListener('click', validateForm);

function validateForm () {
    event.preventDefault();

    if(document.querySelector('span')){
        document.querySelectorAll('form span').forEach(element => {
          element.remove();
        })
      }
    // Input data
    let data = {};
    // Error messages
    let validationErrors = {};

    // Create properties for data
    data.name = document.querySelector('#name').value;
    data.email = document.querySelector('#email').value;
    data.message = document.querySelector('textarea').value;

    // Name
    if (!data.name) {
        console.error('No Name');
        validationErrors.name = 'No name provided';
    } else {
        console.info = 'Name present: '+ data.name;
    }

    // Email
    if (!data.email) {
        console.error('No Email');
        validationErrors.email = 'No email provided';
    } else {
        console.info ='Email present: '+ data.email;
    }

    let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegExp.test(data.email)) {
        validationErrors.email = 'Invalid Email Address';
    } else {
        console.info = 'Email is valid';
    }

    // Message
    if (!data.message) {
        console.error('No message');
        validationErrors.message = 'No message';
    } else {
        console.info('Message present: '+ data.message);
    }



    // If there are errors
    if(Object.keys(validationErrors).length > 0) {
        // Display error messages
        displayErrors(validationErrors, data);
    } else {
        // Send form to backend
        console.log('Sending form data');
    }
}

// Function that will show error messages
function displayErrors(validationErrors) {

    if (validationErrors.name) {
        const errorContainer = document.createElement('span')
        errorContainer.innerHTML = validationErrors.name
        document.querySelector('#name').after(errorContainer)
    }

    if (validationErrors.email) {
        const errorContainer = document.createElement('span')
        errorContainer.innerHTML = validationErrors.email
        document.querySelector('#email').after(errorContainer)
    }

    if (validationErrors.message) {
        const errorContainer = document.createElement('span')
        errorContainer.innerHTML = validationErrors.message
        document.querySelector('textarea').after(errorContainer)
    }
}
