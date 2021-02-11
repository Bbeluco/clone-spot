function showCreatePlaylist(){
    document.querySelector('.popup').style.display = 'block';
}

function hiddenCreatePlaylist() {
    document.querySelector('.popup').style.display = 'none';
}

function createPlaylist() {
    const name = document.querySelector('#name').value
    if(!name) {
        const errorText = document.querySelector('.errorText')
    }
}