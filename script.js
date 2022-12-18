function sendEmail() {
  // get the form data
  var form = document.getElementById('contact-form');
  var data = new FormData(form);
  data.append('to', 'noah.t.scott06@gmail.com');

  // send the email using the Fetch API
  fetch('https://formsubmit.co/48a06cf0230887d82cb528f98924137e', {
    method: 'POST',
    body: data
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);
    clearForm();
    window.location.replace('https://bluewarrior777.github.io/Portfolio/');
  });
}

function clearForm() {
  // reset the forms
  document.getElementById('contact-form').reset();
}