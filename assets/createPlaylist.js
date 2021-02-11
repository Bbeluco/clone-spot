const https = require('https');
require('dotenv').config();

function showCreatePlaylist() {
    document.querySelector('.popup').style.display = 'block';
}

function hiddenCreatePlaylist() {
    document.querySelector('.popup').style.display = 'none';
}

function createPlaylist() {
    let name = document.querySelector('#name').value;
    let description = document.querySelector('#description').value;

    if (!name) {
        document.querySelector('.errorText').style.display = 'block';
    }

    const userId = 'beluc0';
    const token = `Bearer ${process.env.TOKEN}`;
    const postData = JSON.stringify({ name: `${name}`, description: `${description}` });

    const options = {
        hostname: 'api.spotify.com',
        path: `/v1/users/${userId}/playlists`,
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
        },
    };

    const req = https.request(options);

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    req.write(postData);
    req.end();

    name = '';
    description = '';
    getPlaylist();
    document.querySelector('.popup').style.display = 'none';
}

document.getElementById('description')
    .addEventListener('keypress', (e) => {
        const key = e.which || e.keyCode;
        if (key === 13) {
            e.preventDefault();
        }
    });
