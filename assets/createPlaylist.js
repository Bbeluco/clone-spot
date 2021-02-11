request = require('request');
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

    const urlPlaylist = 'https://api.spotify.com/v1/me/playlists';
    const token = `Bearer ${process.env.TOKEN}`;
    request1({ url: urlPlaylist, method: 'GET', headers: { Authorization: token, 'Content-Type': 'application/json' } },
        (error, response, body) => {
            if (error) return;
            const result = JSON.parse(body);
            for (let i = 0; i < result.items.length; i++) {
                createPlaylistName(result.items[i].name);
            }
        });
}

document.getElementById('description')
    .addEventListener('keypress', (e) => {
        const key = e.which || e.keyCode;
        if (key === 13) {
            e.preventDefault();
        }
    });
