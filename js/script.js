(function() {
    emailjs.init("kBoaEvGCIeVQAbKBj");
  })();
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_bc1esk8', 'template_y8ccjlr', this)
      .then(function() {
        alert('Your message has been sent successfully!');
      }, function(error) {
        console.error('Failed to send the message:', error);
        alert('Failed to send the message. Please try again later.');
      });
  });

  // Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");
// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}
filterButtons.forEach(button => button.addEventListener("click", filterCards));