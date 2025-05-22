const scriptURL = 'https://script.google.com/macros/s/AKfycbzMW59OZkhzRLFzpn3F9V3eR_JP4Lf_97HLjV9v-Hrab9VT8Rtea3H8B0r8N-p9OS2oZQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})