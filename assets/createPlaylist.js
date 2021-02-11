function showCreatePlaylist(){
    document.querySelector('.popup').style.display = 'block';
}

function hiddenCreatePlaylist() {
    document.querySelector('.popup').style.display = 'none';
}

function createPlaylist() {
    const name = document.querySelector('#name').value
    console.log(name)
    if(!name) {
        document.querySelector('.errorText').style.display = "block";
        return
    }

}