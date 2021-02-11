let request = require('request'); /* eslint-disable-line */
require('dotenv').config();

function getPlaylist() {
    const urlPlaylist = 'https://api.spotify.com/v1/me/playlists';
    const token = `Bearer ${process.env.TOKEN}`;
    request({ url: urlPlaylist, method: 'GET', headers: { Authorization: token, 'Content-Type': 'application/json' } },
        (error, response, body) => {
            if (error) return;
            const result = JSON.parse(body);
            for (let i = 0; i < result.items.length; i++) {
                createPlaylistName(result.items[i].name);
            }
        });

    function createPlaylistName(name) {
        const playlist = document.querySelector('#playlist');
        const a = document.createElement('a');
        a.innerHTML = name;
        a.className = 'playlist-name btn';
        a.href = '#'; // Logo sera substituido pelo link da pagina
        playlist.appendChild(a);
    }
}
getPlaylist();

module.exports = getPlaylist;
