document.addEventListener('DOMContentLoaded', function () {
    const playlist = document.getElementById('playlist');
    const audioPlayer = document.getElementById('audioPlayer');
    const deezerApiEndpoint = 'https://api.deezer.com/search?q=bollywood&type=track';
  
    // Fetch Bollywood songs from the Deezer API
    fetch(deezerApiEndpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.data.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = song.title;
        listItem.addEventListener('click', function () {
          playSong(song.preview);
        });
        playlist.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching songs:', error));
  
  
    function playSong(url) {
      audioPlayer.src = url;
      audioPlayer.play();
    }
  });
  