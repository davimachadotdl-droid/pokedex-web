const form = document.getElementById('pokemon-form');
const listaElement = document.getElementById('lista-pokemons');
let pokedex = [];
form.addEventListener('submit', function(evento) {
evento.preventDefault();
const novoPokemon = {
id: Date.now(),
nome: document.getElementById('nome').value,
tipo1: document.getElementById('tipo1').value,
tipo2: document.getElementById('tipo2').value,
foto: document.getElementById('foto').value
};
pokedex.push(novoPokemon);
form.reset();
renderizarLista();
});
function renderizarLista() {
listaElement.innerHTML = '';
pokedex.forEach(function(pokemon) {
const textoTipos = pokemon.tipo2
? `${pokemon.tipo1} / ${pokemon.tipo2}`
: pokemon.tipo1;

const card = document.createElement('div');
card.classList.add('card');
card.innerHTML = `
<img src="${pokemon.foto}" alt="${pokemon.nome}">
<h3>${pokemon.nome}</h3>
<p>${textoTipos}</p>
<button class="btn-excluir"
onclick="removerPokemon(${pokemon.id})">Excluir</button>
`;
listaElement.appendChild(card);
});
}
function removerPokemon(id) {
pokedex = pokedex.filter(pokemon => pokemon.id !== id);
renderizarLista();
}