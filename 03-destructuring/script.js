function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

// document.documentElement.addEventListener("mousemove", handleMouseMove);

const frutas = ["Banana", "Uva"];

const [frutas1, fruta2] = frutas;
console.log(frutas);

const useState = [
  "blue",
  function (color) {
    useState[0] = color;
  },
];

const [color, setColor] = useState;

setColor("red");
