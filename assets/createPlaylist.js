function showCreatePlaylist() {
  document.querySelector('.popup').style.display = 'block';
}

function hiddenCreatePlaylist() {
  document.querySelector('.popup').style.display = 'none';
}

function createPlaylist() {
  const name = document.querySelector('#name').value;
  console.log(name);
  if (!name) {
    document.querySelector('.errorText').style.display = 'block';
  }
}

document.getElementById('description')
  .addEventListener('keypress', (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
      e.preventDefault();
      console.log('Digiou enter');
    }
  });
