async function fetchProdutos(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

const requisiçao = fetchProdutos(
  "https://ranekapi.origamid.dev/json/api/produto"
);

requisiçao.then((response) => {
  console.log(requisiçao);
});
