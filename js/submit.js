// Constants for rate-limiting
const MAX_SUBMISSIONS = 99; // Maximum number of submissions allowed
const RESET_TIME = 24 * 60 * 60 * 1000; // Reset the submission count after 24 hours

document.getElementById('reason').addEventListener('change', function () {
    // Get the selected value from the dropdown
    var reason = this.value;

    // Hide all input fields and clear their values by default
    document.querySelectorAll('.reason-fields').forEach(function (field) {
        field.style.display = 'none';
        field.querySelectorAll('input, textarea').forEach(function (input) {
            input.value = ''; // Clear the input values
            input.required = false; // Remove required attribute
        });
    });

    // Show the relevant input fields based on the selected reason and make them required
    if (reason === 'trainer') {
        document.getElementById('trainerFields').style.display = 'block';
        document.querySelectorAll('#trainerFields input, #trainerFields textarea').forEach(function (input) {
            input.required = true; // Make these fields required
        });
    } else if (reason === 'center') {
        document.getElementById('centerFields').style.display = 'block';
        document.querySelectorAll('#centerFields input, #centerFields textarea').forEach(function (input) {
            input.required = true; // Make these fields required
        });
    } else if (reason === 'donate') {
        document.getElementById('donateFields').style.display = 'block';
        document.querySelectorAll('#donateFields input, #donateFields textarea').forEach(function (input) {
            input.required = true; // Make these fields required
        });
    }

    // Show the submit button when a valid option is selected
    var submitButton = document.getElementById('submitButton');
    if (reason !== "") {
        submitButton.style.display = 'block';
    } else {
        submitButton.style.display = 'none';
    }
});

function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submission initiated");

    // Rate-limiting logic
    const currentCount = localStorage.getItem('submissionCount') || 0;
    const lastSubmissionTime = localStorage.getItem('lastSubmissionTime') || Date.now();

    if (Date.now() - lastSubmissionTime > RESET_TIME) {
        // Reset the counter if the reset time has passed
        localStorage.setItem('submissionCount', 0);
    }

    if (currentCount >= MAX_SUBMISSIONS) {
        alert("You have reached the maximum number of submissions. Please try again later.");
        return false;
    }

    // Increment submission count and store submission time
    localStorage.setItem('submissionCount', parseInt(currentCount) + 1);
    localStorage.setItem('lastSubmissionTime', Date.now());

    // Get the selected reason
    var reason = document.getElementById('reason').value;

    // Hide and clear fields for all unselected options before submission
    if (reason !== 'trainer') {
        document.querySelectorAll('#trainerFields input, #trainerFields textarea').forEach(function (input) {
            input.value = ''; // Clear the input value
            input.required = false; // Remove required attribute
        });
    }
    if (reason !== 'center') {
        document.querySelectorAll('#centerFields input, #centerFields textarea').forEach(function (input) {
            input.value = ''; // Clear the input value
            input.required = false; // Remove required attribute
        });
    }
    if (reason !== 'donate') {
        document.querySelectorAll('#donateFields input, #donateFields textarea').forEach(function (input) {
            input.value = ''; // Clear the input value
            input.required = false; // Remove required attribute
        });
    }

    // Submit the form after rate-limiting checks
    event.target.submit();
    document.getElementById('contactForm').reset(); // Reset the form after submission
}
