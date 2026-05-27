// document.querySelector(".btn-primary").addEventListener("click", function () {
//     alert("Thank you for your interest in environmental conservation!");
// });


document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {
      // const response = await fetch("http://localhost:5000/send-email", {
      const response = await fetch("https://environs-wholly-backend.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("response---", response)

      const result = await response.json();
      console.log("result--", result)

      if (result.success) {
        alert("Message sent successfully!");

        document.getElementById("contactForm").reset();
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  });