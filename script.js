function sendEmail() {
  event.preventDefault(); // prevent the form from submitting

  // get the form data
  var form = document.getElementById('contact-form');
  var data = new FormData(form);

  // send the email using the Fetch API
  fetch('https://example.com/sendemail', {
    method: 'POST',
    body: data
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);
  });
}
