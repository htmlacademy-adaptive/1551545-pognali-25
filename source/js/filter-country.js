let countryToggle = document.querySelector('.filter-alphabet__toggle');
let titleToggle = document.querySelector('.filter-alphabet__title');
let filterContent = document.querySelector('.filter__inner-wrapper');
let continentList = document.querySelector('.filter__continent-list');
let closeButton = document.querySelector('.button--alphabet');

countryToggle.addEventListener('click', function () {
  filterContent.classList.toggle('js-closed--filter');
  continentList.classList.toggle('js-closed--continent');
})

titleToggle.addEventListener('click', function () {
  filterContent.classList.toggle('js-closed--filter');
  continentList.classList.toggle('js-closed--continent');
})

closeButton.addEventListener('click', function () {
  filterContent.classList.add('js-closed--filter');
  continentList.classList.add('js-closed--continent');
})
