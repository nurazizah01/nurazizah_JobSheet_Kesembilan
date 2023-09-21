const readline = require('readline');

// Daftar karakter "Samurai X" dengan informasi nama, jenis kelamin, dan peran
const samuraiXCharacters = [
  { nama: 'p pop', jenisKelamin: 'Laki-laki', peran: 'Protagonis' },
  { nama: 'becky amstrong', jenisKelamin: 'Perempuan', peran: 'Protagonis' },
  { nama: 'freen sarocha', jenisKelamin: 'perempuan', peran: 'Antagonis' },
  { nama: 'heng', jenisKelamin: 'Laki-laki', peran: 'Antagonis' },
  { nama: 'miya', jenisKelamin: 'perempuan', peran: 'Antagonis' },
  // Tambahkan karakter lainnya sesuai kebutuhan
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menampilkan daftar karakter berdasarkan jenis kelamin
function showCharactersByGender(jenisKelamin) {
  console.log(`Daftar karakter "Samurai X" dengan jenis kelamin ${jenisKelamin}:`);

  const filteredCharacters = samuraiXCharacters.filter(character => character.jenisKelamin === jenisKelamin);
  filteredCharacters.forEach(character => console.log(`- ${character.nama}, Peran: ${character.peran}`));
}

// Fungsi untuk menampilkan daftar karakter berdasarkan peran
function showCharactersByRole(peran) {
  console.log(`Daftar karakter "Samurai X" dengan peran ${peran}:`);
  const filteredCharacters = samuraiXCharacters.filter(character => character.peran === peran);
  filteredCharacters.forEach(character => console.log(`- ${character.nama}, Jenis Kelamin: ${character.jenisKelamin}`));
}

// Meminta pengguna untuk memilih operasi
rl.question('Pilih operasi (1 untuk jenis kelamin, 2 untuk peran): ', (answer) => {
  if (answer === '1') {
    rl.question('Masukkan jenis kelamin (Laki-laki/Perempuan): ', (jenisKelamin) => {
        console.log('freen sarocha','peran: Antagonis')
        console.log('becky amstrong','peran: Antagonis')
        console.log('miya','peran: Antagonis')
      showCharactersByGender(jenisKelamin);
      rl.close();
    });
  } else if (answer === '2') {
    rl.question('Masukkan peran karakter (Protagonis/Antagonis): ', (peran) => {
      showCharactersByRole(peran);
      console.log('freen sarocha','peran: Antagonis')
        console.log('becky amstrong','peran: Antagonis')
      rl.close();
    });
  } else {
    console.log('Opsi tidak valid.');
    rl.close();
  }
});
