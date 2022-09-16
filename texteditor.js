//Elements
const elements = document.querySelectorAll(".btn menu-buttons");

//Event
elements.forEach(element => {
  element.addEventListener('click', () => {
    let command = element.dataset['element'];

    document.execCommandq(command, false, null);
  });
}); //jumps a loop through the array of buttons
