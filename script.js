// Liste des fichiers audio (nom des fichiers doit correspondre à data-sound)
const sounds = {
    sound1: 'https://www.cjoint.com/doc/24_11/NKurg1emRVN_coucou-wav.wav',
    sound2:'https://www.cjoint.com/doc/24_11/NKurlXqVFvN_triple-monstrewav.wav',
    sound3: 'https://www.cjoint.com/doc/24_11/NKurmThZ82N_je-suis-fatigue-les-brozer-made-with-Voicemod.mp3'
};

// Ajout d'événements aux boutons
document.querySelectorAll('button[data-sound]').forEach(button => {
    button.addEventListener('click', () => {
        const soundKey = button.getAttribute('data-sound');
        if (sounds[soundKey]) {
            const audio = new Audio(sounds[soundKey]);
            audio.play();
        }
    });
});