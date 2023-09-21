const readline =require('readline');

// Daftar anggota JKT48 dengan informasi nama, umur, dan posisi
const jkt48Members = [
  { nama: 'Member1', umur: 20, posisi: 'Singer' },
  { nama: 'Member2', umur: 22, posisi: 'Dancer' },
  { nama: 'Member3', umur: 19, posisi: 'Singer' },
  { nama: 'Member4', umur: 21, posisi: 'Dancer' },
  // Tambahkan anggota lainnya sesuai kebutuhan
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menampilkan daftar anggota berdasarkan posisi
function showMembersByPosition(posisi) {
  console.log(`Daftar anggota JKT48 dengan posisi ${posisi}:`);
  const filteredMembers = jkt48Members.filter(member => member.posisi === posisi);
  filteredMembers.forEach(member => console.log(`- ${member.nama}, Umur: ${member.umur} tahun`));
}

// Fungsi untuk menampilkan daftar anggota berdasarkan umur
function showMembersByAge(minAge, maxAge) {
  console.log(`Daftar anggota JKT48 dengan umur antara ${minAge} dan ${maxAge} tahun:`);
  const filteredMembers = jkt48Members.filter(member => member.umur >= minAge && member.umur <= maxAge);
  filteredMembers.forEach(member => console.log(`- ${member.nama}, Posisi: ${member.posisi}`));
}

// Meminta pengguna untuk memilih opsi
rl.question('Pilih opsi (1 untuk posisi, 2 untuk umur): ', (answer) => {
  if (answer === '1') {
    rl.question('Masukkan posisi (Singer/Dancer): ', (posisi) => {
      showMembersByPosition(posisi);
      rl.close();
    });
  } else if (answer === '2') {
    rl.question('Masukkan rentang umur : ', (umurRange) => {
      const [minAge, maxAge] = umurRange.split('-').map(Number);
      showMembersByAge(minAge, maxAge);
      rl.close();
    });
  } else {
    console.log('Opsi tidak valid.');
    rl.close();
  }
});

  
