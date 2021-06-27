// Se declara el arreglo
const messages = [
    "David",
    "Diana",
    "Ana Maria",
    "Isabela",
    "Antonio",
    "Norma"
]

//Crear función para enviar aleatoriamente  los nombres del arreglo
const randomMsg = () => {
    const messageRandom = messages[Math.floor(Math.random()*messages.length)];
    console.log(messageRandom);
}

// Exportar como un módulo

module.exports = { randomMsg };