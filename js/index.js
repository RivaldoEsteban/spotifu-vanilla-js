import songs from "./songs-data.js";
import player from "./player.js";
import songListContainer from "./song-list-container.js";

songListContainer.render(songs);

const iconPlay1 = document.getElementById("reproducir-1");
const iconPlay2 = document.getElementById("reproducir-2");
const iconPlay3 = document.getElementById("reproducir-3");
const iconPlay4 = document.getElementById("reproducir-4");
const iconPlay5 = document.getElementById("reproducir-5");
const iconPlay6 = document.getElementById("reproducir-6");
const iconPlay7 = document.getElementById("reproducir-7");
const iconPlay8 = document.getElementById("reproducir-8");
const iconPlay9 = document.getElementById("reproducir-9");
const iconPlay10 = document.getElementById("reproducir-10");

const iconPause1 = document.getElementById("icon-pause1");
const iconPause2 = document.getElementById("icon-pause2");
const iconPause3 = document.getElementById("icon-pause3");
const iconPause4 = document.getElementById("icon-pause4");
const iconPause5 = document.getElementById("icon-pause5");
const iconPause6 = document.getElementById("icon-pause6");
const iconPause7 = document.getElementById("icon-pause7");
const iconPause8 = document.getElementById("icon-pause8");
const iconPause9 = document.getElementById("icon-pause9");
const iconPause10 = document.getElementById("icon-pause10");

//funcion cancion aleatoria
const buttonRandom = document.getElementById("button-random");
buttonRandom.addEventListener("click", () => {
  getRandomSong(songs);
});

function getRandomSong(songs) {
  let numberRandom = Math.floor(Math.random() * (11 - 1)) + 1;
  const id = `song-${numberRandom}`;
  const playerContainer = document.getElementById("footer");
  songs.find((song) => {
    if (song.id === id) {
      playerContainer.innerHTML = player.render(song);
      const track = document.getElementById("tag-audio");

      const play = document.getElementById(`reproducir-${numberRandom}`);
      const pause = document.getElementById(`icon-pause${numberRandom}`);
      play.style.display = "none";
      pause.style.display = "block";

      const iconPlayer = document.getElementById("footer-icon");
      iconPlayer.classList.remove("icon-play");
      iconPlayer.classList.add("icon-pause");

      track.play();
      player.timeElapsed();
      const buttonPausePlayer = document.getElementById("button-reproducir");
      buttonPausePlayer.addEventListener("click", () => {
        const track = document.getElementById("tag-audio");
        if (!track.paused && !track.ended) {
          iconPlayer.classList.remove("icon-pause");
          iconPlayer.classList.add("icon-play");
          play.style.display = "block";
          pause.style.display = "none";
          track.pause();
        } else {
          iconPlayer.classList.add("icon-pause");
          iconPlayer.classList.remove("icon-play");
          play.style.display = "none";
          pause.style.display = "block";
          track.play();
        }
      });
    }
  });
}

function playSong(id, songs) {
  const playerContainer = document.getElementById("footer");
  const songData = `song-${id}`;
  const play = document.getElementById(`reproducir-${id}`);
  const pause = document.getElementById(`icon-pause${id}`);
  songs.find((song) => {
    if (song.id == songData) {
      playerContainer.innerHTML = player.render(song);

      play.style.display = "none";
      pause.style.display = "block";

      const iconPlayer = document.getElementById("footer-icon");
      iconPlayer.classList.remove("icon-play");
      iconPlayer.classList.add("icon-pause");

      player.play();
      player.timeElapsed();
      const buttonPausePlayer = document.getElementById("button-reproducir");
      buttonPausePlayer.addEventListener("click", () => {
        const track = document.getElementById("tag-audio");
        if (!track.paused && !track.ended) {
          iconPlayer.classList.remove("icon-pause");
          iconPlayer.classList.add("icon-play");
          play.style.display = "block";
          pause.style.display = "none";
          track.pause();
        } else {
          iconPlayer.classList.add("icon-pause");
          iconPlayer.classList.remove("icon-play");
          play.style.display = "none";
          pause.style.display = "block";
          track.play();
        }
      });
    }
  });
}

function pauseSong(id, songs) {
  const playerContainer = document.getElementById("footer");
  const songData = `song-${id}`;
  songs.find((song) => {
    if (song.id == songData) {
      playerContainer.innerHTML = player.render(song);

      const play = document.getElementById(`reproducir-${id}`);
      const pause = document.getElementById(`icon-pause${id}`);
      play.style.display = "block";
      pause.style.display = "none";

      const iconPlayer = document.getElementById("footer-icon");
      iconPlayer.classList.add("icon-play");
      iconPlayer.classList.remove("icon-pause");

      player.pause();
      player.timeElapsed();
      const buttonPausePlayer = document.getElementById("button-reproducir");
      buttonPausePlayer.addEventListener("click", () => {
        const track = document.getElementById("tag-audio");
        if (!track.paused && !track.ended) {
          iconPlayer.classList.remove("icon-pause");
          iconPlayer.classList.add("icon-play");
          play.style.display = "block";
          pause.style.display = "none";
          track.pause();
        } else {
          iconPlayer.classList.add("icon-pause");
          iconPlayer.classList.remove("icon-play");
          play.style.display = "none";
          pause.style.display = "block";
          track.play();
        }
      });
    }
  });
}

iconPlay1.addEventListener("click", () => {
  playSong(1, songs);
});
iconPlay2.addEventListener("click", () => {
  playSong(2, songs);
});
iconPlay3.addEventListener("click", () => {
  playSong(3, songs);
});
iconPlay4.addEventListener("click", () => {
  playSong(4, songs);
});
iconPlay5.addEventListener("click", () => {
  playSong(5, songs);
});
iconPlay6.addEventListener("click", () => {
  playSong(6, songs);
});
iconPlay7.addEventListener("click", () => {
  playSong(7, songs);
});
iconPlay8.addEventListener("click", () => {
  playSong(8, songs);
});
iconPlay9.addEventListener("click", () => {
  playSong(9, songs);
});
iconPlay10.addEventListener("click", () => {
  playSong(10, songs);
});

iconPause1.addEventListener("click", () => {
  pauseSong(1, songs);
});
iconPause2.addEventListener("click", () => {
  pauseSong(2, songs);
});
iconPause3.addEventListener("click", () => {
  pauseSong(3, songs);
});
iconPause4.addEventListener("click", () => {
  pauseSong(4, songs);
});
iconPause5.addEventListener("click", () => {
  pauseSong(5, songs);
});
iconPause6.addEventListener("click", () => {
  pauseSong(6, songs);
});
iconPause7.addEventListener("click", () => {
  pauseSong(7, songs);
});
iconPause8.addEventListener("click", () => {
  pauseSong(8, songs);
});
iconPause9.addEventListener("click", () => {
  pauseSong(9, songs);
});
iconPause10.addEventListener("click", () => {
  pauseSong(10, songs);
});
