window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    if (!areAllFieldsFilled(formObject)) {
        alert("Please fill in all fields");
        return;
    }

    if (!isValidEmail(formObject.email)) {
        alert("Invalid email format");
        return;
    }

    if (!isValidContactNumber(formObject.phno)) {
        alert("Invalid contact number format");
        return;
    }

    if (!isValidPhoneNumberLength(formObject.phno)) {
        alert("Phone number must be 10 digits");
        return;
    }

    window.location.href = "thank_you.html";
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidContactNumber(contactNumber) {
    const contactNumberPattern = /^\d+$/;
    return contactNumberPattern.test(contactNumber);
}

function isValidPhoneNumberLength(contactNumber) {
    return contactNumber.length === 10;
}

function areAllFieldsFilled(formData) {
    for (const key in formData) {
        if (formData[key].trim() === "") {
            return false;
        }
    }
    return true;
}
