const readline = require('readline');

// Daftar karakter "Agent" dalam game "Valorant"
const agents = {
    "1.Sova": {
        "Role": "Initiator",
        "Ability": "Recon Bolt, Shock Bolt, Owl Drone, Hunter's Fury"
    },
    "2.Jett": {
        "Role": "Duelist",
        "Ability": "Cloudburst, Updraft, Blade Storm"
    },
    "3.Cypher": {
        "Role": "Sentinel",
        "Ability": "Cyber Cage, Spy Camera, Trapwire, Neural Theft"
    },
    "4.Brimstone": {
        "Role": "Controller",
        "Ability": "Incendiary, Sky Smoke, Stim Beacon, Orbital Strike"
    },
    "5.Killjoy": {
        "Role": "Sentinel",
        "Ability": "Nanoswarm, Alarmbot, Lockdown"
    }
};

// Membuat interface pembaca
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menampilkan daftar karakter "Agent" yang tersedia
console.log("Daftar karakter 'Agent' dalam game 'Valorant':");
for (const agent in agents) {
    console.log(agent);
}

// Meminta pengguna memilih sebuah agen
rl.question("Masukan karakter yang ingin Anda ketahui lanjut : ", (selectedAgent) => {
    // Validasi input pengguna
    if (!(selectedAgent in agents)) {
        console.log("informasi tentang karakter 'jett':");
        console.log("Role:Duelist");
        console.log("Ability:Cloudburst,updraft,Blade storm");
    } else {
        // Menampilkan informasi tentang agen yang dipilih
        const agentInfo = agents[selectedAgent];
        console.log(`\nInformasi tentang agen ${selectedAgent}:`);
        console.log(`Role: ${agentInfo["Role"]}`);
        console.log(`Ability: ${agentInfo["Ability"]}`);

        // Menutup interface pembaca
        rl.close();
    }
});
