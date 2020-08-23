import * as APIUtil from "../util/song_api_util";
export const REMOVE_GAME_ERRORS = "REMOVE_GAME_ERRORS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";
export const RECEIVE_BUNCH_SONGS = "RECEIVE_BUNCH_SONGS";

export const receiveSong = (song) => ({
    type: RECEIVE_SONG,
    song
});



export const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
});

export const receiveBunchSongs = (songs) => ({
    type: RECEIVE_BUNCH_SONGS,
    songs
});

// export const receiveErrors = errors => ({
//     type: RECEIVE_GAME_ERRORS,
//     errors
// });

// export const removeErrors = () => ({
//     type: REMOVE_GAME_ERRORS
// });

export const createSong = (song) =>dispatch =>(
    APIUtil.createSong(song) 
        .then((song) => {
            console.log(song)
            // const song = res.data;
            dispatch(receiveSong(song));
        })
        // .catch(err => {
        //     return dispatch(receiveErrors(err.response.data));
        // })
);


export const getSong = (songId) => dispatch =>(
    APIUtil.getSong(songId)
        .then((song) => {
            // const song = res.data;
            dispatch(receiveSong(song));
        })
        // .catch(err => {
        //     return dispatch(receiveErrors(err.response.data));
        // })
);

export const getSongs = (display_name) => dispatch => (
    APIUtil.getSongs(display_name)
        .then((songs) => 
        // console.log(songs))
           
            // const songs = res.data;
           dispatch(receiveSongs(songs))  )
        
        // .catch((err) => {
        //     return dispatch(receiveErrors(err.response.data));
        // })
);

export const getBunchSongs = () => dispatch => (
    APIUtil.bunch_o_songs()
        .then((songs) => 
        // console.log(songs))
           
            // const songs = res.data;
           dispatch(receiveBunchSongs(songs))  )
        
        // .catch((err) => {
        //     return dispatch(receiveErrors(err.response.data));
        // })
);



// export const updateGame = (game) => (dispatch)=>(
//     APIUtil.updateGame(game)
//         .then((res) =>{
//             const game = res.data;
//             dispatch(receiveGame(game));
//         })
//         .catch(err =>{
//             return dispatch(removeErrors(err.response.data));
//         })
// );

// export const deleteGame = gameId => dispatch =>(
//     APIUtil.deleteGame(gameId)
//         .then(res =>{
//             const response = res.data;
//             dispatch(response);
//         })
//         .catch(err => {
//             return dispatch(receiveErrors(err.response.data));
//         })
// );