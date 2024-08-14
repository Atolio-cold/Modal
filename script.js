const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const closeButtons = document.querySelectorAll('.close-modal');
const openButtons = document.querySelectorAll('.show-modal');

const openModal = function (modal) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modals.forEach(modal => modal.classList.add('hidden'));
  overlay.classList.add('hidden');
};

openButtons.forEach(button => {
  button.addEventListener('click', function () {
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    openModal(modal);
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', closeModal);
});

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
