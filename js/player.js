function render({ track, nameSong, album, cover, time }) {
  return `
  <footer class="layout-bottom">
    <div class="player">
      <div class="player-nowPlaying">
        <div class="nowPlaying">
          <div class="nowPlaying-cover">
            <img src=${cover} alt="Portada de Grand Scape"
              title="Portada de Grand Scape de (RADWIMPS, Toko Miura)" id="cover-song">
          </div>
          <div class="nowPlaying-details">
            <div class="nowPlaying-description">
              <a href="#song" class="nowPlaying-title" id="song-name">${nameSong} (feat. Tokio Miura)</a>
              <a href="#artist" class="nowPlaying-artist" id="song-album">${album}</a>
            </div>
            <div class="nowPlaying-actions">
              <button class="player-control" role="switch" aria-checked="false" aria-label="Guardar en tu biblioteca"
                title="Guardar en tu biblioteca">
                <i class="icon-heart" role="switch" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="player-playerControls">
        <div class="playerControls">
          <div class="playerControls-buttons" aria-label="Controles de reproducción">
            <button class="buttonIcon">
              <i class="icon-prev " aria-label="Anterior"></i>
            </button>
            <button class="buttonIcon is-white" id="button-reproducir">
              <i class="icon-play" id="footer-icon" aria-label="Reproducción"></i>
            </button>
            <button class="buttonIcon">
              <i class="icon-next" aria-label="Siguiente "></i>
            </button>
          </div>
          <div class="playerPlayback">
            <span class="playerPlayback-progressTime" id="time-start">0:00</span>
            <div class="playerPlayback-slider">
              <div class="slider">
                <div class="slider-progress">
                  <button class="slider-button" aria-label="controlar el progreso de la reproducción"></button>
                </div>
              </div>
            </div>
            <span class="playerPlayback-progressTime" id="time-end">${time}</span>
          </div>
        </div>
      </div>
      <div class="player-playerVolume">
        <div class="playerVolume">
          <button class="player-control" aria-label="Silenciar" aria-describedby="volumen-icon">
            <i class="icon-volumeUp" id="volumen-icon" role="presentation" aria-label="volumen alto"></i>
          </button>
          <div class="playerVolume-slider">
            <div class="slider">
              <div class="slider-progress">
                <button class="slider-button" aria-label="controlar el progreso de la reproducción"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <audio src=${track} id="tag-audio"></audio>
  </footer>
  `;
}

function play() {
  const tagAudio = document.getElementById("tag-audio");
  tagAudio.play();
}
function pause() {
  const tagAudio = document.getElementById("tag-audio");
  tagAudio.pause();
}

function timeElapsed() {
  const tagAudio = document.getElementById("tag-audio");
  const timeStart = document.getElementById("time-start");
  setInterval(() => {
    timeStart.textContent = tagAudio.currentTime.toFixed(0) / 100;
  }, 1000);
}

function pauseSong() {
  const tagAudio = document.getElementById("tag-audio");
  tagAudio.pause();
}

export default { render, play, timeElapsed, pauseSong, pause };
