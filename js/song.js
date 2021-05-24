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
  return song.firstElementChild;
}

export default { render };
