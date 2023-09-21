const readline =require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const players = ["Lionel Messi", "Cristiano Ronaldo", "Neymar Jr.", "Kylian Mbappé", "Sergio Ramos"];
const clubs = ["Paris Saint-Germain", "Manchester United", "Barcelona", "Paris Saint-Germain", "Paris Saint-Germain"];
const countries = ["Argentina", "Portugal", "Brazil", "France", "Spain"];

// Menggabungkan informasi dari ketiga array menjadi satu array objek pemain
const playerInfo = players.map((player, index) => ({
  name: player,
  club: clubs[index],
  country: countries[index]
}));

console.log(playerInfo);
