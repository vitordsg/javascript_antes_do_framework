const upperName = (name) => name.toUpperCase();
const countLetters = (word) => word.length;

console.log(upperName("vitor"));
console.log(countLetters("vitor"));

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }

  addActiveEvent() {
    this.menuElement.addEventListener("click", (event) => {
      console.log(this);
      event.target.classList.add(this.activeClass);
    });
  }
}

const menu = new Menu(".principal");
menu.addActiveEvent();
console.log(menu);
