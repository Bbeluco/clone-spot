require('dotenv').config();

function showCreatePlaylist() {
    document.querySelector('.popup').style.display = 'block';
}

function hiddenCreatePlaylist() {
    document.querySelector('.popup').style.display = 'none';
}

function createPlaylist() {
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;

    if (!name) {
        document.querySelector('.errorText').style.display = 'block';
    }

    console.log(name, description);
}

document.getElementById('description')
    .addEventListener('keypress', (e) => {
        const key = e.which || e.keyCode;
        if (key === 13) {
            e.preventDefault();
        }
    });
