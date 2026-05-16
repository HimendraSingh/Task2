function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;

   
    if (name == "" || email == "") {
        alert("Name and Email must be filled out!");
        return false;
    }

   
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
            document.forms["contactForm"].reset(); 
        } else {
            alert("Oops! Something went wrong.");
        }
    })
    .catch(error => {
        alert("Network error, please try again later.");
    });

    return false; 
}
