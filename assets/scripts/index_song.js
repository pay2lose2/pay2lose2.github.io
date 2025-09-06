const audioElement = document.getElementById('audio');
const audioTextElement = document.getElementById('track-name');
const musicFolder = './assets/music/';
const songs = [
    "Armor Mayhem _ Nightkilla - The Maze.mp3",
    "Auto Pilot - Seventeen.mp3",
    "Bomberman Hero - Redial (Nintendo 64).mp3",
    "Dubmood (Razor 1911) - Insert No Coins.mp3",
    "Dubmood (Razor 1911) - The Scene is Dead.mp3",
    "Edyta Bartosiewicz - Zegar.mp3",
    "Eric Clapton (Derek and the Dominos) - Layla.mp3",
    "Fleetwood Mac - Dreams.mp3",
    "Fleetwood Mac - Everywhere.mp3",
    "Fleetwood Mac - Little Lies.mp3",
    "Ira - Nadzieja.mp3",
    "Lady Pank - Zawsze tam gdzie ty.mp3",
    "Lady Pank - Stacja Warszawa.mp3",
    "Lady Pank - Tańcz głupia tańcz.mp3",
    "Oddział Zamknięty - Jestem zły.mp3",
    "Oddział Zamknięty - Odmienić los.mp3",
    "Oddział Zamknięty - Party.mp3",
    "Oddział Zamknięty - Twój każdy krok.mp3",
    "Pidżama Porno - Twoja generacja.mp3",
    "RELOADED - Torchlight II installer.mp3",
    "Sam Gellaitry - Assumptions.mp3",
    "Scotch - Delirio Mind.mp3",
    "The Bill - Pop Kultura.mp3",
    "The Microphones - The Moon.mp3",
    "What's a Future Funk.mp3",
    "Wilki - Na Zawsze I Na Wiecznosc [Official Music Video].mp3",
    "Xploshi - Mesosphere.mp3",
    "Xploshi - Pod Lounge.mp3",
    "Xploshi - Rafflesia Channel.mp3",
    "Xploshi - Rafflesia Online.mp3",
    "憂鬱 - Slow.mp3",
];
// if you're going to fork this, then im sorry.

let Index = Math.floor(Math.random() * songs.length);

function playSong(index) {
    const song = songs[Index]
    audioElement.src = musicFolder + song;
    audioTextElement.innerHTML = `${Index+1}. ${song}`
    audioElement.play();
}

function playNextSong() {
    Index++
    if (Index >= songs.length) {
        Index = 0
    }
    playSong(Index)
}

function playLastSong() {
    Index--
    if (Index < 0) {
        Index = songs.length - 1
    }
    playSong(Index)
}

audioElement.addEventListener('ended', playNextSong);
window.onload = playNextSong;