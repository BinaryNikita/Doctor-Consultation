// Services
var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
});

// Doctors

var consultationModal = document.getElementById('consultation-modal');
var confirmationModal = document.getElementById('confirmation-modal');

var consultationButton = document.getElementById('book-consultation');

var closeButtons = document.getElementsByClassName('close');

consultationButton.onclick = function () {
  consultationModal.style.display = 'block';
};

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function () {
    consultationModal.style.display = 'none';
    confirmationModal.style.display = 'none';
  };
}

document.getElementById('consultation-form').onsubmit = function (event) {
  event.preventDefault();

  consultationModal.style.display = 'none';

  confirmationModal.style.display = 'block';

  // contact form

  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      document.getElementById('confirmation-modal').style.display = 'block';
    });

  document
    .getElementsByClassName('close')[0]
    .addEventListener('click', function () {
      document.getElementById('confirmation-modal').style.display = 'none';
    });

  window.addEventListener('click', function (event) {
    var modal = document.getElementById('confirmation-modal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
};
