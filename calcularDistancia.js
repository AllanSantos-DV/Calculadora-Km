// Coordenadas dos locais
const coordenadas = {
  "Hospital-das-clinicas": { lat: -23.55725932057201, lon: -46.66799640892738 },
  "João da farmacia": { lat: -23.605932322263662, lon: -47.02627622469074 },
  "Casa": { lat: -23.648384822358747, lon: -47.00182678512374 },
  "Posto de Combustivel": { lat: -23.609953321569346, lon: -47.007964244530896 }
};

// Carros
const carros = {
  "Uno-cinza": { nome: "Uno-Cinza", autonomia: 13 },
  "Uno-vermelho": { nome: "Uno-Vermelho", autonomia: 11 },
  "Fiesta": { nome: "Fiesta", autonomia: 9 }
};

// Array para armazenar os destinos selecionados
let destinos = [];

// Elementos HTML
const selectVeiculo = document.getElementById("veiculo");
const selectLocal = document.getElementById("local");
const btnAdicionarDestino = document.getElementById("btnAdicionarDestino");
const listaDestinos = document.getElementById("listaDestinos");
const btnMedirKm = document.getElementById("btnMedirKm");
const btnLimpar = document.getElementById("btnLimpar");
const resultado = document.getElementById("distancia");
const combustivel = document.getElementById("combustivel");
const vale = document.getElementById("vale");
const precoCombustivelInput = document.getElementById("precoCombustivel");

// Criação das opções do select
for (let local in coordenadas) {
  const option = document.createElement("option");
  option.value = local;
  option.textContent = local.replace(/-/g, " ");
  selectLocal.appendChild(option);
}

// Criação das opções do select para os carros
for (let veiculo in carros) {
  const option = document.createElement("option");
  option.value = veiculo;
  option.textContent = carros[veiculo].nome;
  selectVeiculo.appendChild(option);
}

// Evento de clique no botão "Adicionar Destino"
btnAdicionarDestino.addEventListener("click", () => {

  const localSelecionado = selectLocal.value;
  const localNome = selectLocal.options[selectLocal.selectedIndex].text + "  ";

  if (localSelecionado) {
    destinos.push(localSelecionado);
    const listItem = document.createElement("li");
    listItem.textContent = localNome;
    listaDestinos.appendChild(listItem);
    btnMedirKm.disabled = destinos.length < 2;
    addDeleteButton(listItem);
  }
});

// Evento de clique no botão "Medir Km"
btnMedirKm.addEventListener("click", () => {
  let distanciaTotal = 0;
  for (let i = 0; i < destinos.length - 1; i++) {
    const coordenadaAtual = coordenadas[destinos[i]];
    const coordenadaProxima = coordenadas[destinos[i + 1]];
    const distancia = calcularDistancia(
      coordenadaAtual.lat, coordenadaAtual.lon,
      coordenadaProxima.lat, coordenadaProxima.lon
    );
    distanciaTotal += (distancia + (distancia * 0.25));
  }

  const carroSelecionado = selectVeiculo.value;
  const autonomiaCarro = carros[carroSelecionado].autonomia;
  const litrosNecessarios = distanciaTotal / autonomiaCarro;
  const precoCombustivel = parseFloat(precoCombustivelInput.value);
  const valorAbastecimento = litrosNecessarios * precoCombustivel;
  const valorArredondado = Math.ceil(valorAbastecimento / 10) * 10;

  resultado.innerHTML = `A distância total percorrida é de ${distanciaTotal.toFixed(2)} km.`;
  combustivel.innerHTML = `Serão necessários ${litrosNecessarios.toFixed(2)} litros de combustível.`;
  vale.innerHTML = `O valor do abastecimento será de R$ ${valorArredondado.toFixed(2)}.`;
});

// Função para calcular a distância entre duas coordenadas (mesma função utilizada anteriormente)
function calcularDistancia(lat1, lon1, lat2, lon2) {
  const raioTerra = 6371; // Raio médio da Terra em quilômetros

  // Converter graus para radianos
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distancia = raioTerra * c;

  return distancia;
}

// Evento de clique no botão "Limpar"
btnLimpar.addEventListener("click", () => {
  destinos = [];
  listaDestinos.innerHTML = "";
  btnMedirKm.disabled = true;
  resultado.innerHTML = "";
  combustivel.innerHTML = "";
  vale.innerHTML = "";
});

// Função para adicionar o botão de exclusão a um destino da lista
function addDeleteButton(listItem) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir"
  deleteButton.className = "btn btn btn-outline-danger btn-sm";
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    const index = Array.from(listaDestinos.children).indexOf(listItem);
    destinos.splice(index, 1);
    listaDestinos.removeChild(listItem);
    btnMedirKm.disabled = destinos.length < 2;
  });
}
