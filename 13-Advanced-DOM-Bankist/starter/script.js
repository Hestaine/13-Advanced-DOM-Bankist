const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');
const navlinks = document.querySelector('.nav__links');

///////////////////////////////////////////////////////////////////////
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

message.style.backgroundColor = 'black';
message.style.width = '110%';
message.style.height = parseInt(getComputedStyle(message).height) + 10 + 'px';

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

/////////////////////////////////////////////////////////////////
btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////////////////////

navlinks.addEventListener('click', function (e) {
  if (!e.target.classList.contains('nav__link')) {
    return;
  }
 
  e.preventDefault();
  const id = e.target.getAttribute('href');
  const section = document.querySelector(`${id}`);
  section.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////////////////////////

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(tab => {
    tab.classList.remove('operations__tab--active');
  });

  tabsContent.forEach(tab => {
    tab.classList.remove('operations__content--active');
  });

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

  clicked.classList.add('operations__tab--active');
});
