// form-rate-limit.js
const MAX_SUBMISSIONS = 99; // Maximum number of allowed submissions
const RESET_TIME = 10 * 60 * 1000; // Time to reset the count (10 minutes)

function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submission initiated");
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

    localStorage.setItem('submissionCount', parseInt(currentCount) + 1);
    localStorage.setItem('lastSubmissionTime', Date.now());
    
    // Submit the form after rate-limiting checks
    event.target.submit();
    document.getElementById('contactForm').reset();
}
