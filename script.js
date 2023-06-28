AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Setting up the form constants
let btn = document.getElementById('submitButton');

const senderName = document.getElementById('senderName');
const senderEmail = document.getElementById('senderEmail');
const emailSubject = document.getElementById('emailSubject');
const emailBody = document.getElementById('emailBody');

//event listeners
btn.addEventListener('click', sendEmail);

//function that actually sends the email
function sendEmail() {
  event.preventDefault()
  alert('hi');

  let emailMessage = `
  <b>Name: </b>${senderName.value}
  <br>
  <b>Email: </b>${senderEmail.value}
  <br>
  <b>Subject: </b>${emailSubject.value}
  <br>
  <b>Message: </b>${emailBody.value}
  <br>
`

  Email.send({
    SecureToken : "253b2967-e422-422d-8c7d-ff85d65a512f",
    To : 'febonza@gmail.com',
    From : 'febonza@gmail.com',
    Subject : "Contact from the Website - " + senderEmail.value,
    Body : emailMessage
  }).then(
    message => alert(message)
  );

  afterSentMessage = document.getElementById("afterSent");
  btn.innerHTML = "Message Sent"
  afterSentMessage.innerHTML = "I will get back to you very soon!";
}