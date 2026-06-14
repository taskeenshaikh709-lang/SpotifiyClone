let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar');
let audio = new Audio('Audio/1.mp3');

let currentSong = 1;

let playMusic = Array.from(document.getElementsByClassName('playMusic'));
let allMusic = Array.from(document.getElementsByClassName('music-card'));

play.addEventListener('click', () => {

    if (audio.paused || audio.currentTime == 0) {

        audio.play();

        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');

    } else {

        audio.pause();

        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
    }
});

audio.addEventListener('timeupdate', () => {
if(audio.duration){
    let progress = (audio.currentTime / audio.duration) * 100;

    progressBar.value = progress;

    progressBar.style.background =
        `linear-gradient(to right, #177200ff ${progress}%, #333 ${progress}%)`;
}
});

progressBar.addEventListener('input', function () {

    let value = this.value;

    this.style.background =
        `linear-gradient(to right, #177200ff ${value}%, #333 ${value}%)`;

    audio.currentTime = (progressBar.value * audio.duration) / 100;
});

const makeAllPlay = () => {

    playMusic.forEach((element) => {

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

playMusic.forEach((element) => {

    element.addEventListener('click', (e) => {

        let indexe = parseInt(e.target.id);

        if (isNaN(indexe)) return;

        makeAllPlay();

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');

        currentSong = indexe;

        audio.src = `Audio/${currentSong}.mp3`;
        audio.currentTime = 0;
        audio.play();

        document.querySelector('.song-info img').src =
    songs[indexe - 1].songImage;

document.querySelector('.img-title-info').innerText =
    songs[indexe - 1].songName;

document.querySelector('.img-des-info').innerText =
    songs[indexe - 1].songDes;
    });

});



let songs = [
    {
        songName: "Song 1",
        songDes: "This is the description for song 1",
        songImage: "images/1.webp",
        songPath: "Audio/1.mp3"
    },
    {
        songName: "Song 2",
        songDes: "This is the description for song 2",
        songImage: "images/2.avif",
        songPath: "Audio/2.mp3"
    },
    {
        songName: "Song 3",
        songDes: "This is the description for song 3",
        songImage: "images/3.avif",
        songPath: "Audio/3.mp3"
    },
    {
        songName: "Song 4",
        songDes: "This is the description for song 4",
        songImage: "images/4.jpg",
        songPath: "Audio/4.mp3"
    },
    {
    songName: "Song 5",
    songDes: "This is the description for song 5",
    songImage: "images/5.jpg",
    songPath: "Audio/5.mp3"
},
{
    songName: "Song 6",
    songDes: "This is the description for song 6",
    songImage: "images/6.jpg",
    songPath: "Audio/6.mp3"
},
{
    songName: "Song 7",
    songDes: "This is the description for song 7",
    songImage: "images/7.jpg",
    songPath: "Audio/7.mp3"
},
{
    songName: "Song 8",
    songDes: "This is the description for song 8",
    songImage: "images/8.jpg",
    songPath: "Audio/8.mp3"
},
{
    songName: "Song 9",
    songDes: "This is the description for song 9",
    songImage: "images/9.jpg",
    songPath: "Audio/9.mp3"
},
{
    songName: "Song 10",
    songDes: "This is the description for song 10",
    songImage: "images/10.jpg",
    songPath: "Audio/10.mp3"
},
{
    songName: "Song 11",
    songDes: "This is the description for song 11",
    songImage: "images/11.jpg",
    songPath: "Audio/11.mp3"
},
{
    songName: "Song 12",
    songDes: "This is the description for song 12",
    songImage: "images/12.jpg",
    songPath: "Audio/12.mp3"
},
{
    songName: "Song 13",
    songDes: "This is the description for song 13",
    songImage: "images/13.jpg",
    songPath: "Audio/13.mp3"
},
{
    songName: "Song 14",
    songDes: "This is the description for song 14",
    songImage: "images/14.jpg",
    songPath: "Audio/14.mp3"
},
{
    songName: "Song 15",
    songDes: "This is the description for song 15",
    songImage: "images/15.jpg",
    songPath: "Audio/15.mp3"
},
{
    songName: "Song 16",
    songDes: "This is the description for song 16",
    songImage: "images/16.webp",
    songPath: "Audio/16.mp3"
},
{
    songName: "Song 17",
    songDes: "This is the description for song 17",
    songImage: "images/17.avif",
    songPath: "Audio/17.mp3"
},
{
    songName: "Song 18",
    songDes: "This is the description for song 18",
    songImage: "images/18.avif",
    songPath: "Audio/18.mp3"
},
{
    songName: "Song 19",
    songDes: "This is the description for song 19",
    songImage: "images/19.jpg",
    songPath: "Audio/19.mp3"
},
{
    songName: "Song 20",
    songDes: "This is the description for song 20",
    songImage: "images/20.jpg",
    songPath: "Audio/20.mp3"
},
{
    songName: "Song 21",
    songDes: "This is the description for song 21",
    songImage: "images/21.jpg",
    songPath: "Audio/21.mp3"
},
{
    songName: "Song 22",
    songDes: "This is the description for song 22",
    songImage: "images/22.jpg",
    songPath: "Audio/22.mp3"
},
{
    songName: "Song 23",
    songDes: "This is the description for song 23",
    songImage: "images/23.jpg",
    songPath: "Audio/23.mp3"
},
{
    songName: "Song 24",
    songDes: "This is the description for song 24",
    songImage: "images/24.jpg",
    songPath: "Audio/24.mp3"
},
{
    songName: "Song 25",
    songDes: "This is the description for song 25",
    songImage: "images/25.jpg",
    songPath: "Audio/25.mp3"
},
{
    songName: "Song 26",
    songDes: "This is the description for song 26",
    songImage: "images/26.jpg",
    songPath: "Audio/26.mp3"
},
{
    songName: "Song 27",
    songDes: "This is the description for song 27",
    songImage: "images/27.jpg",
    songPath: "Audio/27.mp3"
},
{
    songName: "Song 28",
    songDes: "This is the description for song 28",
    songImage: "images/28.jpg",
    songPath: "Audio/28.mp3"
},
{
    songName: "Song 29",
    songDes: "This is the description for song 29",
    songImage: "images/29.jpg",
    songPath: "Audio/29.mp3"
},
{
    songName: "Song 30",
    songDes: "This is the description for song 30",
    songImage: "images/30.jpg",
    songPath: "Audio/30.mp3"
},
{
    songName: "Song 31",
    songDes: "This is the description for song 31",
    songImage: "images/31.jpg",
    songPath: "Audio/31.mp3"
},
{
    songName: "Song 32",
    songDes: "This is the description for song 32",
    songImage: "images/32.jpg",
    songPath: "Audio/32.mp3"
},
{
    songName: "Song 33",
    songDes: "This is the description for song 33",
    songImage: "images/33.jpg",
    songPath: "Audio/33.mp3"
},
{
    songName: "Song 34",
    songDes: "This is the description for song 34",
    songImage: "images/34.jpg",
    songPath: "Audio/34.mp3"
},
{
    songName: "Song 35",
    songDes: "This is the description for song 35",
    songImage: "images/35.jpg",
    songPath: "Audio/35.mp3"
},
{
    songName: "Song 36",
    songDes: "This is the description for song 36",
    songImage: "images/36.jpg",
    songPath: "Audio/36.mp3"
},
{
    songName: "Song 37",
    songDes: "This is the description for song 37",
    songImage: "images/37.jpg",
    songPath: "Audio/37.mp3"
},
{
    songName: "Song 38",
    songDes: "This is the description for song 38",
    songImage: "images/38.jpg",
    songPath: "Audio/38.mp3"
},
{
    songName: "Song 39",
    songDes: "This is the description for song 39",
    songImage: "images/39.jpg",
    songPath: "Audio/39.mp3"
},
{
    songName: "Song 40",
    songDes: "This is the description for song 40",
    songImage: "images/40.jpg",
    songPath: "Audio/40.mp3"
}   
]

order = [...songs];
allMusic.forEach((element, i) => {

    if (songs[i]) {

        element.getElementsByTagName('img')[0].src =
            songs[i].songImage;
    }
});

allMusic.forEach((element, i) => {

    element.getElementsByTagName('img')[0].src =
        songs[i].songImage;

    element.getElementsByClassName('image-title')[0].innerText =
        songs[i].songName;

    element.getElementsByClassName('image-description')[0].innerText =
        songs[i].songDes;

});

let shuffle = document.getElementById('shuffle');
let repeat = document.getElementById('repeat');
let nowBar = document.querySelector('.now-bar');

let songOnRepeat = false;
let songOnShuffle  = false;

function shuffleSongs(originalOrder) {
    let order = [...originalOrder];

    for (let i = order.length - 1; i > 0; i--) {
        [order[i], order[j]] = [order[j], order[i]];

        [order[i], order[j]] = [order[j], order[i]];
    }

    return order;
}

shuffle.addEventListener('click' ,  () =>{
    if(!songOnShuffle){
        songOnShuffle = true;
        songOnRepeat = false;
        shuffle.classList.add('active');
        repeat.classList.remove('active');

        order = shuffleSongs(songs);
    }
    

    else{
        songOnShuffle = false;
        shuffle.classList.remove('active');

        order = songs;
    }
})

function updateActiveIcon(){

    makeAllPlay();

    let currentIcon = document.getElementById(currentSong);

    if(currentIcon){

        currentIcon.classList.remove('fa-circle-play');
        currentIcon.classList.add('fa-circle-pause');
    }
}


let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
function updateSongInfo() {

    document.querySelector('.song-info img').src =
        songs[currentSong - 1].songImage;

    document.querySelector('.img-title-info').innerText =
        songs[currentSong - 1].songName;

    document.querySelector('.img-des-info').innerText =
        songs[currentSong - 1].songDes;
}

function playNextSong() {

    currentSong++;

    if (currentSong > songs.length) {
        currentSong = 1;
    }

    audio.src = songs[currentSong - 1].songPath;
    audio.currentTime = 0;
    audio.play();

    makeAllPlay();

    let currentIcon = document.getElementById(currentSong);

    if (currentIcon) {
        currentIcon.classList.remove('fa-circle-play');
        currentIcon.classList.add('fa-circle-pause');
    }

    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');

    updateSongInfo();
}
audio.addEventListener('ended', () => {

    if(songOnRepeat){

        audio.currentTime = 0;
        audio.play();
    }
    else{

        playNextSong();
    }
});

function playPrevSong() {

    currentSong--;

    if (currentSong < 1) {
        currentSong = songs.length;
    }

    audio.src = songs[currentSong - 1].songPath;
    audio.currentTime = 0;
    audio.play();

    makeAllPlay();

    let currentIcon = document.getElementById(currentSong);

    if (currentIcon) {
        currentIcon.classList.remove('fa-circle-play');
        currentIcon.classList.add('fa-circle-pause');
    }

    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');

    updateSongInfo();
}





audio.src = songs[0].songPath;
updateSongInfo();