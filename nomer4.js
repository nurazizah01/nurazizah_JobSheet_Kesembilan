const readline = require('readline');

// Daftar karakter "Slam Dunk" dengan informasi nama, posisi, dan jumlah poin
const slamDunkCharacters = [
  { nama: 'Hanamichi Sakuragi', posisi: 'Power Forward', poin: 15 },
  { nama: 'Kaede Rukawa', posisi: 'Small Forward', poin: 18 },
  { nama: 'Ryota Miyagi', posisi: 'Point Guard', poin: 12 },
  { nama: 'Takenori Akagi', posisi: 'Center', poin: 10 },
  // Tambahkan karakter lainnya sesuai kebutuhan
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menampilkan daftar karakter berdasarkan posisi
function showCharactersByPosition(posisi) {
  console.log(`Daftar karakter "Slam Dunk" dengan posisi ${posisi}:`);
  const filteredCharacters = slamDunkCharacters.filter(character => character.posisi === posisi);
  filteredCharacters.forEach(character => console.log(`- ${character.nama}, Poin: ${character.poin}`));
}

// Fungsi untuk menampilkan daftar karakter berdasarkan jumlah poin
function showCharactersByPoints(minPoints, maxPoints) {
  console.log(`Daftar karakter "Slam Dunk" dengan jumlah poin antara ${minPoints} dan ${maxPoints}:`);
  const filteredCharacters = slamDunkCharacters.filter(character => character.poin >= minPoints && character.poin <= maxPoints);
  filteredCharacters.forEach(character => console.log(`- ${character.nama}, Posisi: ${character.posisi}`));
}

// Meminta pengguna untuk memilih operasi
rl.question('Pilih operasi (1 untuk posisi, 2 untuk jumlah poin): ', (answer) => {
  if (answer === '1') {
    rl.question('Masukkan posisi (Power Forward/Small Forward/Point Guard/Center): ', (posisi) => {
      showCharactersByPosition(posisi);
      rl.close();
    });
  } else if (answer === '2') {
    rl.question('Masukkan rentang jumlah poin : ', (pointsRange) => {
      const [minPoints, maxPoints] = pointsRange.split('-').map(Number);
      showCharactersByPoints(minPoints, maxPoints);
      rl.close();
    });
  } else {
    console.log('Opsi tidak valid.');
    rl.close();
  }
});
