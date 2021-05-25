import songListContainer from "./song-list-container.js";
import songs from "./songs-data.js";
import player from "./player.js";

function render({
  id,
  nameSong,
  artista,
  album,
  idIconPlay,
  idIconPause,
  idNameSong,
  idAlbum,
  idArtist,
  cover,
  idCover,
  time,
  idButton,
}) {
  const template = `
    <div class="song" id=${id}>
      <div class="album-song-buttons-content">
        <button class="buttonIcon play" role="switch" id=${idButton}
         aria-checked="false" aria-label="Reproducir canción de la lista">
          <i class="icon-play display-play" id=${idIconPlay} role="switch" aria-hidden="true"></i>
          <i class="icon-pause display-pause" id=${idIconPause}  role="switch" aria-hidden="true"></i>
        </button>
        <button class="btn-heart" role="switch" id='like' aria-checked="false" aria-label="Guardar en tu biblioteca">
          <i class="icon-heart" role="switch" aria-hidden="true" alt="like"></i>
        </button>
      </div>
      <p class="name-song" id=${idNameSong}>${nameSong}</p>
      <p class="name-artist" id=${idArtist}>${artista}</p>
      <p class="album" id=${idAlbum}>${album}</p>
      <p class="date-song">2020-28-11</p>
      <p class="time-song">${time}</p>
      <p style='display:none' id=${idCover}>${cover}</p>
    </div>
  `;
  const song = document.createElement("div");
  song.innerHTML = template;
  setEvents(song);

  return song.firstElementChild;
}

function playSong(id) {
  songListContainer.render(songs);

  const playerContainer = document.getElementById("footer");
  const songData = id;
  const play = document.querySelector(`#${id} .icon-play`);
  const pause = document.querySelector(`#${id} .icon-pause`);
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

function pauseSong(id) {
  const playerContainer = document.getElementById("footer");
  const songData = id;
  const play = document.querySelector(`#${id} .icon-play`);
  const pause = document.querySelector(`#${id} .icon-pause`);

  songs.find((song) => {
    if (song.id == songData) {
      playerContainer.innerHTML = player.render(song);

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

function setEvents($el) {
  const playButton = $el.querySelector(".icon-play");
  const id = $el.querySelector(".song").id;
  // const $el = $el;
  playButton.addEventListener("click", function () {
    playSong(id);
  });

  const pauseButton = $el.querySelector(".icon-pause");
  pauseButton.addEventListener("click", function () {
    pauseSong(id);
  });
}

export default { render };
