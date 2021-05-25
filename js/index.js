import songs from "./songs-data.js";
import player from "./player.js";
import songListContainer from "./song-list-container.js";

songListContainer.render(songs);

//funcion cancion aleatoria
const buttonRandom = document.getElementById("button-random");
buttonRandom.addEventListener("click", () => {
  getRandomSong(songs);
});

function getRandomSong(songs) {
  songListContainer.render(songs);
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
