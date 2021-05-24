import songItem from "./song.js";

const containerSong = document.getElementById("container-songs");

function cleanSongList() {
  containerSong.innerHTML = "";
}

function renderSong(song) {
  const element = songItem.render(song);
  containerSong.append(element);
}

function render(songs) {
  cleanSongList();
  songs.forEach(renderSong);
}

// render(songs);

export default { render };
