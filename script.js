document.addEventListener('DOMContentLoaded', function () {
  var popup = document.getElementById('popup');
  var popupClose = document.getElementById('popup-close');
  var serviceField = document.getElementById('serviceField');
  var ctaButtons = document.querySelectorAll('.btn.cta');

  ctaButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      serviceField.value = btn.dataset.service;
      document.getElementById('popup-title').textContent = btn.dataset.service;
      popup.style.display = 'flex';
    });
  });

  popupClose.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  window.addEventListener('click', function (e) {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});
