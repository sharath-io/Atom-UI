const modal = document.querySelector('.modal');
const modalLive = document.querySelector('.modal-live');
const modalClose = document.querySelector('.modal-close');

const displayModal = () => modal.style.display = 'block';
const hideModal = () => modal.style.display = 'none';

modalLive.addEventListener('click', displayModal);
modalClose.addEventListener('click', hideModal);