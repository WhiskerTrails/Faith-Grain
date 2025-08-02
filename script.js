function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.querySelector(".openbtn").style.display = "none";
}


function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.querySelector(".openbtn").style.display = "block";
}

<script>
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const status = document.getElementById('formStatus');

  fetch('https://formsubmit.co/ajax/faithandgrain@yahoo.com', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      status.style.display = "block";
    } else {
      throw new Error('Form submission failed.');
    }
  })
  .catch(error => {
    status.textContent = "❌ Oops! There was a problem.";
    status.style.color = "red";
    status.style.display = "block";
  });
});
</script>
