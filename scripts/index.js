const profButton = document.querySelectorAll('.professions__button');
const prof = document.querySelector('.professions');

const choiseButton = function() {
  const buttonList = Array.from(document.querySelectorAll('.professions__button'));
  buttonList.forEach((button) => {
    button.addEventListener('click', () => {
    prof.classList.add('professions_close');
})
  })
};

choiseButton();

// profButton.addEventListener('click', (evt) => {
//   evt.target.classList.add('professions_close');
// });

// const choiseButton = (evt) => {
//   evt.target.
// }