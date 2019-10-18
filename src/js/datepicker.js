const availableDays = document.querySelectorAll('.datepicker__day-cell.is-available');

const timeSpotsSection = document.querySelector('.timespots');

function pickDate() {
  const pickedDay = document.querySelector('.datepicker__day-cell.is-picked');

  if (pickedDay) {
    pickedDay.classList.remove('is-picked');
  }

  if (this.classList.contains('is-picked')) return;

  this.classList.add('is-picked');
  timeSpotsSection.classList.remove('is-hidden');
  timeSpotsSection.focus();
}

availableDays.forEach((day) => {
  day.addEventListener('click', pickDate);
});
