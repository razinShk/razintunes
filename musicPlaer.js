



let songs = [
  { name: "505 - Arctic Monkeys", file: "SpotifyMate.com - 505 - Arctic Monkeys.mp3" },
  { name: "Do I Wanna Know? - Arctic Monkeys", file: "SpotifyMate.com - Do I Wanna Know_ - Arctic Monkeys.mp3" },
  { name: "Get You The Moon - Kina", file: "SpotifyMate.com - Get You The Moon (feat. Snøw) - Kina.mp3" },
  { name: "One For The Road - Arctic Monkeys", file: "SpotifyMate.com - One For The Road - Arctic Monkeys.mp3" },
  { name: "R U Mine? - Arctic Monkeys", file: "SpotifyMate.com - R U Mine_ - Arctic Monkeys.mp3" },
  { name: "I Wanna Be Yours - Arctic Monkeys", file: "SpotifyMate.com - I Wanna Be Yours - Arctic Monkeys.mp3" },
  { name: "Way down We Go - KALEO", file: "SpotifyMate.com - Way down We Go - KALEO.mp3" },
  { name: "Careless Whispers - George Michael", file: "SpotifyMate.com - Careless Whisper - George Michael.mp3" },
  { name: "Sajni - Arjit Singh", file: "SpotifyMate.com - Sajni (From _Laapataa Ladies_) - Ram Sampath (1).mp3	" },
];

function main() {
  let audioPlayer = document.getElementById('audioPlayer');
  let songList = document.getElementById('songList');

  function showSongs() {
    for (let i = 0; i < songs.length; i++) {
      let li = document.createElement('li');
      li.textContent = songs[i].name;
      li.onclick = function () {
        playSong(i);
      };
      songList.appendChild(li);
    }
  }

  function playSong(index) {
    audioPlayer.src = 'songs/' + songs[index].file;
    audioPlayer.play();
    let allSongs = songList.getElementsByTagName('li');
    for (let i = 0; i < allSongs.length; i++) {
      allSongs[i].classList.remove('playing');
    }
    allSongs[index].classList.add('playing');
  }

  function playNextSong() {
    let currentSong = songList.querySelector('.playing');
    let nextSong = currentSong.nextElementSibling;
    if (!nextSong) {
      nextSong = songList.firstElementChild;
    }
    playSong(Array.from(songList.children).indexOf(nextSong));
  }

  showSongs();
  audioPlayer.onended = playNextSong;

}

document.querySelector('.music').addEventListener('click', main);
document.querySelector('.two').addEventListener('click', main);
document.querySelector('.artic').addEventListener('click', main);