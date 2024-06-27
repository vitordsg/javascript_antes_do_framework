const precos = [
  "Credito",
  "R$ 200",
  "R$ 400",
  "Contas pagas",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

const precosFiltros = precos.filter((preco) => preco.includes("R$"));

const precoNumeros = precosFiltros.map((preco) =>
  Number(preco.replace("R$ ", ""))
);

const total = precoNumeros.reduce((acc, item) => acc + item);

console.log(total);
