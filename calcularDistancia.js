// Abrir Modal ( Exemplo de Uso )
window.onload = function() {

  const modalExemplo = new bootstrap.Modal(document.getElementById("modalExemploUso"));
  const naoMostrarMais = localStorage.getItem("naoMostrarMais");
  if (!naoMostrarMais) {
    modalExemplo.show();
  }
}

// seleção para nao mostrar mais o modal ( Exemplo de Uso)
const naoMostrarMais = document.getElementById("naoMostrarMais");
naoMostrarMais.addEventListener("click", function() {
  localStorage.setItem("naoMostrarMais", true);
});

// Coordenadas das casas
const coordenadas = {
  "Posto de Combustivel - RT43": { lat: -23.609953321569346, lon: -47.007964244530896 },
  "Allan - Casa": { lat: -23.648384822358747, lon: -47.00182678512374 },
  "João da farmacia/Sandra - Av Tancredo Neves 576 Jardim Bela Vista": { lat: -23.605932322263662, lon: -47.02627622469074 },
  "Antonio/Maria madalena - Estrada bom jesus 205": { lat: -23.58324393726385, lon: -47.02907351305623 },
  "Necy/Arivaldo - Rua Jorge amado 20 chácara do carmo": { lat: -23.6209460026032, lon: -47.049088876706314 },
  "Alcino - Rua Benedito Soares Coelho 61": { lat: -23.593762265646628, lon: -47.02766295056301 },
  "Adriana - Rua Urca 345 agreste": { lat: -23.647218528467288, lon: -47.00217583831432 },
  "Zé frito - Rua Vilma 74 capela de São pedro": { lat: -23.581325055909577, lon: -47.00925687512006 },
  "Rosalina - Rua urca 330 pq agreste": { lat: -23.64697862694154, lon: -47.00241077535817 },
  "Maria aparecida - Rua adriatico 18 jd marialda": { lat: -23.610100257618985, lon: -47.02731696861249 },
  "Vera/Ernani - Rua tupi guarani 45 portão vermelho": { lat: -23.60960209780221, lon: -47.006140762946416 },
  "Alencar - Rua tupi-guarani 128 portao vermelho": { lat: -23.610323024456672, lon: -47.0051684732474 },
  "Sr Pedro/Valquiria - Rua jabaquara 91 - jd mirador": { lat: -23.594126712222845, lon: -47.01429897332854 },
  "Sra. Maria - Rua das amoreiras 170 São judas": { lat: -23.615511727012926, lon: -47.01085086138818 },
  "Francisco/Maria - Rua Santiago 34 jd herminia": { lat: -23.600229630596793, lon: -47.02438215476359 },
  "Kelly/Gabriela/Márcia - Estrada do matao 560 matao": { lat: -23.62345321493235, lon: -47.02076954963875 },
  "Helena - Rua do sorriso 90 jardim vargem grande": { lat: -23.601284939111093, lon: -47.00148490419508 },
  "Ilca - Rua do trabalho 19": { lat: -23.601004542255346, lon: -47.002634117232056 },
  "jakelline - Rua Araraquara 124 cidade jardim": { lat: -23.620829953582597, lon: -47.02987912625385 },
  "Letícia - Rua José Manoel de Oliveira 944 bela vista": { lat: -23.61225897085505, lon: -47.019213979792156 },
  "Américo - Rua egeu 76 jardim marialda": { lat: -23.609497837725332, lon: -47.02702831528781 },
  "Neide - Rua cananeia 85 tojuco preto": { lat: -23.638263718485554, lon: -46.990281820119534 },
  "Sr. Milton - Rua eugenio Maciel de Oliveira 100 jd mirador": { lat: -23.593887107807596, lon: -47.0108993785342 },
  "Benedita - Rua mario scarvance 386 jd betania": { lat: -23.602792698807917, lon: -47.02083636859638 },
  "Janaina - Rua da figueira, 45 bela vista": { lat: -23.608311527944274, lon: -47.02457249764607 },
  "Aninha - Rua zinia 45 narita garden": { lat: -23.622999270621584, lon: -47.02353312449743 },
  "valdeci (travessa joaquim novaes 65) R Joaquim Novaes 769 bela vista": { lat: -23.6110000514719, lon: -47.01185086355558 },
  "José cleber - Rua Wardemilhe Dionisio Silva 72 bela vista": { lat: -23.60954125679628, lon: -47.02061884470542 },
  "D Helena - Rua dos encanadores 1229": { lat: -23.619459504102068, lon: -47.003233940733026 },
  "Ilzelia - Rua dos encanadores 1495 jd europa": { lat: -23.616867185690804, lon: -47.00298347535924 },
  "Vera - Rua Jabaquara 18 Parque Mira Flores (São Lucas)": { lat: -23.596092996594333, lon: -47.01786457479123 },
  "Verônica - Rua primavera 60 narita garden": { lat: -23.619210441461053, lon: -47.02349937956663 },
  "Sr Antônio - Rua Alagoas 109 Bela vista": { lat: -23.612251942349033, lon: -47.02091316186551 },
  "Maria Madalena - Rua javaés 295 portão vermelho": { lat: -23.6032928715547, lon: -47.004560152182506 },
  "Sr silas - Departamento de obras": { lat: -23.60162944886569, lon: -47.021320418564606 },
  "Flávia - Rua Maria do carmo novaes 698 capela de São pedro": { lat: -23.58687449537831, lon: -47.00794058766835 },
  "Lurdes - Rua Noel rosa 07 mirante da mata": { lat: -23.617304521942515, lon: -46.95345066656708 },
  "Natália - Rua Santa Ângela 16 Chácara Portão Vermelho": { lat: -23.60873380707277, lon: -47.016506247764895 }
};

// Coordenadas dos hospitais
const coordenadasHospital = {
  "Hospital-Estadual-Sapopemba": { lat: -23.611026889385712, lon: -46.49279396870906 },
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
  "Ame-Maria-Zelia": { lat: -23.531080628922663, lon: -46.59962499070363 },
  "Ame-Bourroul": { lat: -23.549127458951453, lon: -46.64438729335501 },
  "Ame-Taboão": { lat: -23.619451073582997, lon: -46.76976645437811 },
  "Ame-Carapicuiba": { lat: -23.53896622794629, lon: -46.821165347446794 },
  "Ame-Itapevi": { lat: -23.542748384317502, lon: -46.93631153259342 },
  "CDI-(Centro diagnostico por imagem)": { lat: -23.54780485698698, lon: -46.93228437945552 }
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
  const name_endereco = local.split("-");
  const name = document.createElement("span");
  name.className = "font-weight-bold";
  name.textContent = name_endereco[0];
  const endereco = document.createElement("span");
  endereco.className = "text-danger";
  endereco.textContent = " - " + name_endereco[1];
  option.innerHTML = '';
  option.appendChild(name);
  option.appendChild(endereco);
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
  option.textContent = carros[veiculo].nome + " - Autonomia: " + carros[veiculo].autonomia;
  selectVeiculo.appendChild(option);
}

// Limpar saida ao trocar veiculo e/ou trocar o preco do combustivel
const selectVeiculoChange = document.querySelector("#veiculo");
const precoCombustivelChange = document.querySelector('#precoCombustivel');
selectVeiculoChange.addEventListener("change", limparSaida);
precoCombustivelChange.addEventListener('change', limparSaida);


// Função para lidar com o evento de clique em um botão "Adicionar"
function adicionarLocal(select, lista) {
  limparSaida();
  const localSelecionado = select.value;
  const localNome = select.options[select.selectedIndex].text + "  ";

  if (localSelecionado) {
    destinos.push(localSelecionado);
    const listItem = document.createElement("li");
    listItem.textContent = localNome;
    lista.appendChild(listItem);
    btnMedirKm.disabled = destinos.length < 2;
    addDeleteButton(listItem);
  }
}

// Evento de clique no botão "Adicionar Casa"
btnAdicionarCasa.addEventListener("click", () => {
  adicionarLocal(selectLocalCasa, listaDestinos);
});

// Evento de clique no botão "Adicionar Hospital"
btnAdicionarHospital.addEventListener("click", () => {
  adicionarLocal(selectLocalHospital, listaDestinos);
});

// Evento de clique no botão "Medir Km"
btnMedirKm.addEventListener("click", () => {

  const carroSelecionado = selectVeiculo.value;
  if (carroSelecionado == "" || precoCombustivelInput.value == "") {
    alert("Selecione um veiculo e Defina o valor do combustivel")
    return
  }

  let distanciaTotal = 0;

  for (let i = 0; i < destinos.length - 1; i++) {
    const coordenadaAtual = coordenadas[destinos[i]] || coordenadasHospital[destinos[i]];
    const coordenadaProxima = coordenadas[destinos[i + 1]] || coordenadasHospital[destinos[i + 1]];
    const distancia = geolib.getDistance(
      {latitude: coordenadaAtual.lat, longitude: coordenadaAtual.lon},
      {latitude: coordenadaProxima.lat, longitude: coordenadaProxima.lon}
    );
    distanciaTotal += (distancia + (distancia * 0.4)) / 1000;
  }

  const distanciaExtra = Math.floor(distanciaTotal / 50) * 6;
  distanciaTotal += distanciaExtra;

  const precoCombustivel = parseFloat(precoCombustivelInput.value);
  const autonomiaCarro = carros[carroSelecionado].autonomia;
  const litrosNecessarios = distanciaTotal / autonomiaCarro;
  const valorAbastecimento = litrosNecessarios * precoCombustivel;
  const valorArredondado = Math.ceil(valorAbastecimento / 10) * 10;

  resultado.innerHTML = `A distância total percorrida é de ${distanciaTotal.toFixed(2)} km.`;
  combustivel.innerHTML = `Serão necessários ${litrosNecessarios.toFixed(2)} litros de combustível.`;
  vale.innerHTML = `O valor do abastecimento será de R$ ${valorArredondado.toFixed(2)}.`;
});

// Evento de clique no botão "Limpar"
btnLimpar.addEventListener("click", () => {
  destinos = [];
  listaDestinos.innerHTML = "";
  btnMedirKm.disabled = true;
  limparSaida();
});

// Função para limpara saida.
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
    limparSaida();
  });
}
