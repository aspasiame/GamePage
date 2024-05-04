$(document).ready(function () {
  const photoCarousel = $(".owl-carousel");
  photoCarousel.owlCarousel({
    items: 1,
    loop: true,
});

const arrowPrew = $(".arrow-left");
const arrowNext = $(".arrow-right");

arrowPrew.click(function () {
  photoCarousel.trigger("prev.owl.carousel");
});

arrowNext.click(function () {
  photoCarousel.trigger("next.owl.carousel");
});
});




document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll('.question');

  questions.forEach(function(question) {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const expandBtn = this.querySelector('.expand-btn');
      
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        expandBtn.classList.remove('open');
      } else {
        answer.style.display = 'block';
        expandBtn.classList.add('open');
      }
    });
  });
});