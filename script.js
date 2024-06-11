const mainCard = document.querySelector("#ContentWarpper");

const songImg = document.querySelector("#SongImg");
const controlButtons = document.querySelector(".control");


const playPauseButton = document.querySelector("#PausePlay");
const audio = document.querySelector("audio");
const artist = document.querySelector("#Artist");
const songName = document.querySelector("#SongName");
const previousButton = document.querySelector("#Previous");
const nextButton = document.querySelector("#Next");
const songImgAtTheTop = document.querySelector("img");


let isPlaying = false;
let index = 0;

const songDataBase = [
  {
    songSrc: "./music/1.mp3",
    title: "Assalamu Alaika",
    artist: "Maher Zain",
    imgSrc: "./img/1.jpg",
  },
  {
    songSrc: "./music/2.mp3",
    title: "Deen Islam",
    artist: "Mohamed Tarek",
    imgSrc: "./img/2.jpg",
  },
  {
    songSrc: "./music/3.mp3",
    title: "Lakhon Salam",
    artist: "Atif Aslam",
    imgSrc: "./img/3.jpg",
  },
  {
    songSrc: "./music/4.mp3",
    title: "Mohammad Nabina",
    artist: "Unknown",
    imgSrc: "./img/4.jpg",
  },
  {
    songSrc: "./music/5.mp3",
    title: "Asslamu Alaika",
    artist: "Maher Zain",
    imgSrc: "./img/5.jpg",
  },
  {
    songSrc: "./music/6.mp3",
    title: "Maulaya Salli",
    artist: "Sami Yusuf",
    imgSrc: "./img/6.jpg",
  },
  {
    songSrc: "./music/7.mp3",
    title: "Lakhon Salam",
    artist: "Atif Aslam",
    imgSrc: "./img/7.jpg",
  },
  {
    songSrc: "./music/8.mp3",
    title: "Assalamu Alaika",
    artist: "Maher zain",
    imgSrc: "./img/8.jpg",
  },
  {
    songSrc: "./music/9.mp3",
    title: "Maulaya Salli",
    artist: "Mix",
    imgSrc: "./img/1.jpg",
  },
  {
    songSrc: "./music/10.mp3",
    title: "Inshallah",
    artist: "Maher Zain",
    imgSrc: "./img/2.jpg",
  },
];

const loadMusic = () => {
  audio.src = songDataBase[index].songSrc;
  artist.textContent = songDataBase[index].artist;
  songName.textContent = songDataBase[index].title;
  songImgAtTheTop.src = songDataBase[index].imgSrc;
  songImg.src = songDataBase[index].imgSrc;
  
};
audio.addEventListener("ended", () => {
  loadMusic(index++);
  play();
});

loadMusic();

nextButton.addEventListener("click", () => {
  if (index < songDataBase.length - 1) {
    loadMusic(index++);
    play();
  } else {
    pause();
  }
});
previousButton.addEventListener("click", () => {
  if (index > 0) {
    loadMusic(index--);
    play();
  } else {
    pause();
  }
});

const play = () => {
  isPlaying = true;
  audio.play();
  playPauseButton.classList.replace("fa-play", "fa-pause");
  songImg.classList.add("anime");
};
const pause = () => {
  isPlaying = false;
  audio.pause();
  playPauseButton.classList.replace("fa-pause", "fa-play");
  songImg.classList.remove("anime");
};

playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});



