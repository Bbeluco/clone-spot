export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null,
}

const reducer = (state, action) => {
    console.log(action); //Debug line

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case 'SET_CURRENT_PLAYBACK':
            return {
                ...state,
                playing: action.playing
            }
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item
            }
        default: 
            return state;
    }
}

export default reducer