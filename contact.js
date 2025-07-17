document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.elements["name"].value;
      const email = form.elements["email"].value;
      const message = form.elements["message"].value;
  
      if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been submitted.");
        form.reset();
      } else {
        alert("Please fill out all fields.");
      }
    });
  });