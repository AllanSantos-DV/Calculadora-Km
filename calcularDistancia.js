// Coordenadas dos locais
const coordenadas = {
  "João da farmacia/Sandra": { lat: -23.605932322263662, lon: -47.02627622469074 },
  "Casa": { lat: -23.648384822358747, lon: -47.00182678512374 },
  "Posto de Combustivel": { lat: -23.609953321569346, lon: -47.007964244530896 },
  "Antonio/Maria madalena Estrada bom jesus 205": { lat: -23.58324393726385, lon: -47.02907351305623 },
  "Necy/Arivaldo rua Jorge amado 20 chácara do carmo": { lat: -23.6209460026032, lon: -47.049088876706314 },
  "Alcino rua Benedito Soares Coelho 61": { lat: -23.593762265646628, lon: -47.02766295056301 },
  "Adriana Rua Urca 345 agreste": { lat: -23.647218528467288, lon: -47.00217583831432 },
  "Zé frito rua Vilma 74 capela de São pedro": { lat: -23.581325055909577, lon: -47.00925687512006 },
  "Rosalina rua urca 330 pq agreste": { lat: -23.64697862694154, lon: -47.00241077535817 },
  "Maria aparecida rua adriatico 18 jd marialda": { lat: -23.610100257618985, lon: -47.02731696861249 },
  "Vera rua tupi guarani 45 portão vermelho": { lat: -23.60960209780221, lon: -47.006140762946416 },
  "Alencar rua tupi-guarani 128 portao vermelho": { lat: -23.610323024456672, lon: -47.0051684732474 },
  "Sr Pedro/Valquiria rua jabaquara 91 - jd mirador": { lat: -23.594126712222845, lon: -47.01429897332854 },
  "Sra. Maria rua das amoreiras 170 São judas": { lat: -23.615511727012926, lon: -47.01085086138818 },
  "Francisco/Maria Rua Santiago 34 jd herminia": { lat: -23.600229630596793, lon: -47.02438215476359 },
  "Kelly/Gabriela/Márcia Estrada do matao 560 matao": { lat: -23.62345321493235, lon: -47.02076954963875 },
  "Helena rua do sorriso 90 jardim vargem grande": { lat: -23.601284939111093, lon: -47.00148490419508 },
  "Ilca rua do trabalho 19": { lat: -23.601004542255346, lon: -47.002634117232056 },
  "jakelline rua Araraquara 124 cidade jardim": { lat: -23.620829953582597, lon: -47.02987912625385 },
  "Letícia rua José Manoel de Oliveira 944 bela vista": { lat: -23.61225897085505, lon: -47.019213979792156 },
  "Américo rua egeu 76 jardim marialda": { lat: -23.609497837725332, lon: -47.02702831528781 },
  "Neide rua cananeia 85 tojuco preto": { lat: -23.638263718485554, lon: -46.990281820119534 },
  "Sr. Milton rua eugenio Maciel de Oliveira 100 jd mirador": { lat: -23.593887107807596, lon: -47.0108993785342 },
  "Benedita rua mario scarvance 386 jd betania": { lat: -23.602792698807917, lon: -47.02083636859638 },
  "Janaina rua da figueira, 45 bela vista": { lat: -23.608311527944274, lon: -47.02457249764607 },
  "Aninha rua zinia 45 narita garden": { lat: -23.622999270621584, lon: -47.02353312449743 },
  "valdeci (travessa joaquim novaes 65) R Joaquim Novaes 769 bela vista": { lat: -23.6110000514719, lon: -47.01185086355558 },
  "José cleber R Wardemilhe Dionisio Silva 72 bela vista": { lat: -23.60954125679628, lon: -47.02061884470542 },
  "D Helena rua dos encanadores 1229": { lat: -23.619459504102068, lon: -47.003233940733026 },
  "Ilzelia rua dos encanadores 1495 jd europa": { lat: -23.616867185690804, lon: -47.00298347535924 },
  "Vera R Jabaquara 18 Parque Mira Flores (São Lucas)": { lat: -23.596092996594333, lon: -47.01786457479123 },
  "Verônica rua primavera 60 narita garden": { lat: -23.619210441461053, lon: -47.02349937956663 },
  "Sr Antônio rua Alagoas 109 Bela vista": { lat: -23.612251942349033, lon: -47.02091316186551 },
  "Maria Madalena Rua javaés 295 portão vermelho": { lat: -23.6032928715547, lon: -47.004560152182506 },
  "Sr silas departamento de obras": { lat: -23.60162944886569, lon: -47.021320418564606 },
  "Flávia rua Maria do carmo novaes 698 capela de São pedro": { lat: -23.58687449537831, lon: -47.00794058766835 }
};

const coordenadasHospital = {
  "Hospital-Santa-Casa": { lat: -23.543338608786335, lon: -46.64983332216189 },
  "Hospital-Santa-Marcelina": { lat: -23.553964534888532, lon: -46.460888319739354 },
  "Hospital-brigadeiro": { lat: -23.5704603292522, lon: -46.651181245547065 },
  "Hospital-São-Paulo": { lat: -23.59742790631287, lon: -46.643741105322135 },
  "Hospital-da-Mulher": { lat: -23.533699186931027, lon: -46.64402550118201 },
  "Hospital-das-clinicas": { lat: -23.55725932057201, lon: -46.66799640892738 },
  "Incor-Instituto-do-Coração": { lat: -23.557128200361195, lon: -46.667720877862685 },
  "Icesp": { lat: -23.55567810140334, lon: -46.66806954344539 },
  "Hospital-Heliópolis": { lat: -23.607434635882914, lon: -46.595781934384405 },
  "Hospital-Geral-Itapecirica": { lat: -23.700093253777933, lon: -46.84783186096863 },
  "Hospital-Pirajussara": { lat: -23.640159950083408, lon: -46.810095690353364 },
  "Hospital-Geral-Carapicuiba": { lat: -23.53407224184409, lon: -46.830430856147906 },
  "Hospital-Geral-Itapevi": { lat: -23.538240626550113, lon: -46.94327975579121 },
  "AE-Varzea-do-carmo": { lat: -23.556633611822434, lon: -46.62574322370864 },
  "Dante-Pazzanese": { lat: -23.58534681379381, lon: -46.651499673158774 },
  "Ame-Idoso-Sudeste": { lat: -23.593167081080974, lon: -46.636095877344424 },
  "Ame-Barradas": { lat: -23.609701033045855, lon: -46.58968137513807 },
  "Ame-Bourroul": { lat: -23.549127458951453, lon: -46.64438729335501 },
  "Ame-Taboão": { lat: -23.619451073582997, lon: -46.76976645437811 },
  "Ame-Carapicuiba": { lat: -23.53896622794629, lon: -46.821165347446794 },
  "Ame-Itapevi": { lat: -23.542748384317502, lon: -46.93631153259342 }
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
const selectLocalCasa = document.getElementById("localCasa");
const selectLocalHospital = document.getElementById("localHospital");
const btnAdicionarCasa = document.getElementById("btnAdicionarCasa");
const btnAdicionarHospital = document.getElementById("btnAdicionarHospital");
const listaDestinos = document.getElementById("listaDestinos");
const btnMedirKm = document.getElementById("btnMedirKm");
const btnLimpar = document.getElementById("btnLimpar");
const resultado = document.getElementById("distancia");
const combustivel = document.getElementById("combustivel");
const vale = document.getElementById("vale");
const precoCombustivelInput = document.getElementById("precoCombustivel");

// Criação das opções do select casas
for (let local in coordenadas) {
  const option = document.createElement("option");
  option.value = local;
  option.textContent = local.replace(/-/g, " ");
  selectLocalCasa.appendChild(option);
}

// Criação das opções do select hospitais
for (let local in coordenadasHospital) {
  const option = document.createElement("option");
  option.value = local;
  option.textContent = local.replace(/-/g, " ");
  selectLocalHospital.appendChild(option);
}

// Criação das opções do select para os carros
for (let veiculo in carros) {
  const option = document.createElement("option");
  option.value = veiculo;
  option.textContent = carros[veiculo].nome;
  selectVeiculo.appendChild(option);
}

// Evento de clique no botão "Adicionar Casa"
btnAdicionarCasa.addEventListener("click", () => {

  limparSaida();
  const localSelecionado = selectLocalCasa.value;
  const localNome = selectLocalCasa.options[selectLocalCasa.selectedIndex].text + "  ";

  if (localSelecionado) {
    destinos.push(localSelecionado);
    const listItem = document.createElement("li");
    listItem.textContent = localNome;
    listaDestinos.appendChild(listItem);
    btnMedirKm.disabled = destinos.length < 2;
    addDeleteButton(listItem);
  }
});

// Evento de clique no botão "Adicionar Hospital"
btnAdicionarHospital.addEventListener("click", () => {
  
  limparSaida();
  const localSelecionado = selectLocalHospital.value;
  const localNome = selectLocalHospital.options[selectLocalHospital.selectedIndex].text + "  ";

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
    const coordenadaAtual = coordenadas[destinos[i]] || coordenadasHospital[destinos[i]];
    const coordenadaProxima = coordenadas[destinos[i + 1]] || coordenadasHospital[destinos[i + 1]];
    const distancia = calcularDistancia(
      coordenadaAtual.lat, coordenadaAtual.lon,
      coordenadaProxima.lat, coordenadaProxima.lon
    );
    distanciaTotal += (distancia + (distancia * 0.25));
  }

  const distanciaExtra = Math.floor(distanciaTotal / 100) * 15;
  distanciaTotal += distanciaExtra;

  const carroSelecionado = selectVeiculo.value;
  const autonomiaCarro = carros[carroSelecionado].autonomia;
document.getElementById("autonomia").innerHTML=autonomiaCarro;
  const litrosNecessarios = distanciaTotal / autonomiaCarro;
  const precoCombustivel = parseFloat(precoCombustivelInput.value);
  const valorAbastecimento = litrosNecessarios * precoCombustivel;
  const valorArredondado = Math.ceil(valorAbastecimento / 10) * 10;

  resultado.innerHTML = `A distância total percorrida é de ${distanciaTotal.toFixed(2)} km.`;
  combustivel.innerHTML = `Serão necessários ${litrosNecessarios.toFixed(2)} litros de combustível.`;
  vale.innerHTML = `O valor do abastecimento será de R$ ${valorArredondado.toFixed(2)}.`;
});

// Função para calcular a distância entre duas coordenadas
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
  limparSaida();
});

// Função para limpara saida ao alterar destinos.
function limparSaida(){
  resultado.innerHTML = "";
  combustivel.innerHTML = "";
  vale.innerHTML = "";
}

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
