function sendEmail() {
  // get the form data
  var form = document.getElementById('contact-form');
  var data = new FormData(form);
  data.append('to', 'noah.t.scott06@gmail.com');

  // send the email using the Fetch API
  fetch('https://formsubmit.co/noah.t.scott06@gmail.com', {
    method: 'POST',
    body: data
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);
    clearForm();
  });
}

function clearForm() {
  // reset the form
  document.getElementById('contact-form').reset();
}
