const availableTimeSpots = document.querySelectorAll('.timespots__item.is-available');

function pickTimeSpot() {
  const pickedTimeSpot = document.querySelector('.timespots__item.is-picked');

  if (pickedTimeSpot) {
    pickedTimeSpot.classList.remove('is-picked');
  }

  if (this.classList.contains('is-picked')) return;

  this.classList.add('is-picked');
}

availableTimeSpots.forEach((timeSpot) => {
  timeSpot.addEventListener('click', pickTimeSpot);
});
