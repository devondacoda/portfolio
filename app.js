const footer = document.getElementsByTagName('footer')[0];
const backToTopBtn = document.querySelector('.to-top');

document.addEventListener('mousewheel', () => {
  if (this.scrollY <= 400) footer.setAttribute('hidden', true);
  else footer.removeAttribute('hidden');
});

backToTopBtn.addEventListener('click', () => footer.setAttribute('hidden', true));
