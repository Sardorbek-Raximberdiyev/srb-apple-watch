const elSiteHeader = document.querySelector('.site-header');
const elOpenButtonn = elSiteHeader.querySelector('.js-open-button');

if (elOpenButtonn) {
  elOpenButtonn.addEventListener('click', function () {
    elSiteHeader.classList.toggle('site-header-open');
  })
}