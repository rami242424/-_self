const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const dim = document.querySelector('.dim')

function openModal() {
  modal.classList.add('active');
  document.documentElement.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('active');
  document.documentElement.style.overflow = 'auto';
}

btnOpen.addEventListener('click', openModal)
btnClose.addEventListener('click', closeModal)
dim.addEventListener('click', closeModal)