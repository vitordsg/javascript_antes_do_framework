function showList(empresa, ...clients) {
  console.log(empresa);
  console.log(clients);
}

showList("Origamid", "Joao", "Maria");

const numeros = [1, 2, 4, 65, 14, 5, 2];

console.log(Math.max(...numeros));

const items = document.querySelectorAll("li");
console.log(items);

items.forEach((item) => {
  console.log(item);
});

const carro = { cor: "Azul", portas: 4, ano: 2020 };

const cloneCarro2 = carro;

const cloneCarro = { ...carro, turbo: true };

class Transporte {
  constructor() {
    this.terrstre = true;
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const carro1 = new Carro("vermelho", 4);

const cloneCarro1 = { ...carro1 };

console.log(carro1);
console.log(cloneCarro1);
