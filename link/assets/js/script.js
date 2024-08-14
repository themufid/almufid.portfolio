
const container = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});

function vibrate() {
  navigator.vibrate(6);
}

const socialMediaLinks = document.querySelectorAll(".social-media div");

ScrollReveal().reveal(socialMediaLinks, {
  duration: 1000,
  opacity: 0,
  distance: "30%",
  origin: "bottom",
  scale: 0.9
});

function showMessage() {
  setTimeout(function() {
    alert("Terimakasih, silahkan tanyakan saja apa yang anda inginkan yaa!");
  }, 3000); 
}

function toggleDarkMode() {
  const body = document.body;
  const darkIcon = document.getElementById('dark-icon');
  
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    darkIcon.classList.remove('fa-sun');
    darkIcon.classList.add('fa-moon');
  } else {
    body.classList.add('dark-mode');
    darkIcon.classList.remove('fa-moon');
    darkIcon.classList.add('fa-sun');
  }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var subject = 'Message From ' + name;

  var mailtoLink = 'mailto:almufid.business@gmail.com' +
                   '?subject=' + encodeURIComponent(subject) +
                   '&body=' + encodeURIComponent(message + '\n\nSalam,\n' + name);

  window.location.href = mailtoLink;

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});


// Search

const searchBtn = document.getElementById('search-btn');
const searchDropdown = document.getElementById('search-dropdown');
const searchForm = document.getElementById('search-form');
const content = document.querySelector('.content');

searchBtn.addEventListener('click', function() {
  searchDropdown.style.display = (searchDropdown.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
  if (!searchBtn.contains(event.target) && !searchDropdown.contains(event.target)) {
     searchDropdown.style.display = 'none';
   }
});

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let searchTerm = document.getElementById('search-input').value.toLowerCase();
  let paragraphs = content.querySelectorAll('p');
	  
  paragraphs.forEach(p => {
     p.style.background = '';
     if (p.textContent.toLowerCase().includes(searchTerm)) {
       p.style.background = 'yellow';
      }
 });

  document.getElementById('search-input').value = '';
});

