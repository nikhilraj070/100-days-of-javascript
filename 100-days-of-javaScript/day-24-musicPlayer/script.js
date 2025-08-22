const audio = document.getElementsByClassName('audio')[0];
const song_name = document.getElementsByClassName('name')[0];
const artist = document.getElementsByClassName('artist')[0];
const prev = document.getElementsByClassName('prev')[0];
const next = document.getElementsByClassName('next')[0];
const stat = document.getElementsByClassName('status')[0];
const range_slider = document.getElementsByClassName('range_slider')[0];
const current_time = document.getElementsByClassName('current_time')[0];
const ending_time = document.getElementsByClassName('ending_time')[0];
const volume_slider = document.getElementsByClassName('volume_slider')[0];
let isPlay = false;
let track_number = 0;
let total = 0;
const music = [
    { title: "Royalty", src: "./assets/royalty.mp3", artist: "Egzod, Maestro Chives, Neoni" },
    { title: "Royalty Funk", src: "./assets/mortalFunk.mp3", artist: "LXNGVX, Maestro Chives" },
    { title: "Mortals", src: "./assets/mortals.mp3", artist: "Warriyo" },
    { title: "Mortal Funk", src: "./assets/mortalFunk.mp3", artist: "Warriyo" },
    { title: "Montagem Toma", src: "./assets/Montagem.mp3", artist: "MXZI, SK3TCH01, X972" }
];
function setduration(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}
function reset() {
    range_slider.value = 0;
    current_time.innerText = '00:00';
}
function play_track() {
    let track = music[track_number];
    audio.src = track.src;
    if (isPlay) {
        audio.play();
    }
    audio.addEventListener('loadedmetadata', () => {
        total = audio.duration;
        ending_time.innerText = setduration(total);
        range_slider.max = Math.floor(total);
        song_name.innerText = track.title;
        artist.innerText = track.artist;
    });
}
prev.addEventListener('click', () => {
    reset();
    track_number = (track_number === 0) ? music.length - 1 : track_number - 1;
    play_track();
});
next.addEventListener('click', () => {
    reset();
    track_number = (track_number === music.length - 1) ? 0 : track_number + 1;
    play_track();
});
stat.addEventListener('click', () => {
    if (stat.classList.contains('play')) {
        stat.classList.remove('play');
        stat.innerText = "play_arrow";
        audio.pause();
        isPlay = false;
    } else {
        stat.classList.add('play');
        stat.innerText = "pause";
        isPlay = true;
        play_track();
    }
});
audio.addEventListener("timeupdate", () => {
    range_slider.value = audio.currentTime;
    current_time.innerText = setduration(audio.currentTime);
});
range_slider.addEventListener("input", () => {
    audio.currentTime = range_slider.value;
});
audio.addEventListener("ended", () => {
    next.click();
});
volume_slider.addEventListener("input", () => {
    audio.volume = volume_slider.value / 100;
});
