function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;

    // 1. Basic Validation (Jo assignment ki demand hai)
    if (name == "" || email == "") {
        alert("Name and Email must be filled out!");
        return false;
    }

    // 2. Real Working Integration (Bina redirect kiye background me email bhejna)
    // Apne HTML form me action URL daalne ki jagah hum yahan direct hit maarenge
    fetch("https://formspree.io/f/xxxxxxxx", { // xxxxxxxx ki jagah apna Formspree id daal dena
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Success! Message sent straight to Himendra's inbox.");
            document.forms["contactForm"].reset(); // Form clear karne ke liye
        } else {
            alert("Oops! Something went wrong.");
        }
    })
    .catch(error => {
        alert("Network error, please try again later.");
    });

    return false; // Yeh form ko default page reload karne se rokega
}