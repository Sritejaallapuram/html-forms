document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all required fields.");
        return;
    }

    document.getElementById("successMessage").innerText =
        "Form submitted successfully!";

    this.reset();
});