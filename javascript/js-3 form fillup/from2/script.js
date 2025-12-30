function nextPage(event, nextPageUrl) {
    event.preventDefault();

    // Validate form data (you can add more validation as needed)
    const form = event.target;
    if (!form.checkValidity()) {
        alert("Please fill out all fields.");
        return false;
    }

    // Serialize form data and append to URL as query parameters
    const formData = new FormData(form);
    const queryParams = new URLSearchParams(formData).toString();
    const redirectUrl = nextPageUrl + '?' + queryParams;

    // Redirect to the next page
    window.location.href = redirectUrl;
    return false;
}
