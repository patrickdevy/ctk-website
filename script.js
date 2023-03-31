window.addEventListener('load', function() {
    var fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(el) {
      el.classList.add('visible');
    });
  });