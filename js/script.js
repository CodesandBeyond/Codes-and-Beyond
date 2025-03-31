document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("kBoaEvGCIeVQAbKBj"); // Replace with your actual public key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let statusMessage = document.getElementById("status_message");

        emailjs.sendForm("service_gmf6io9", "template_y8ccjlr", this)
            .then(function () {
                statusMessage.style.color = "green";
                statusMessage.innerText = "Your message has been sent successfully!";
            }, function (error) {
                console.error("Failed to send message:", error);
                statusMessage.style.color = "red";
                statusMessage.innerText = "Failed to send message. Please try again later.";
            });
    });
});
