fetch("https://ranekapi.origamid.dev/json/api/produto")
  .then((r) => r.json())
  .then((jsonBody) => {
    document.querySelector("#app").innerHTML = jsonBody[0].nome;
    console.log(jsonBody);
  });

const data = {
  id: "vitorsantos",
  nome: "Vitor",
  email: "vitinho6.6@hotmail.com",
  senha: "34727215",
  cep: "11360020",
  rua: "Rua Goitacazes",
  numero: "250",
  bairro: "Parque São Vicente",
  cidade: "São Vicente",
  estado: "São Paulo",
};

fetch("https://ranekapi.origamid.dev/json/api/usuario", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
