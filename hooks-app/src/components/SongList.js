import React, { useState, useEffect } from 'react';
import { v1 as id } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
    /**
     * songs => used ro reference the objects in state, like (songs[0].title => Sky Full)
     * setSongs => used to set new values to state.
     * useState => used to init the state, of course you can assign to it init data, like ex down 
     */
    const [songs, setSongs] = useState([
        {title: 'Sky Full', id: 1},
        {title: 'Magic', id: 2},
        {title: 'Yellow', id: 3},
    ]);

    const [songsCount, setSongsCount] = useState(3);

    /**
     * useEffect => run when data changed, ex: when add new song..
     * callback fun help to determine when we need to run useEffect (avoid always running of useEffect).
     * in this ex useEffect will run only when songs will change.
     */
    useEffect(() => {
        console.log('useEffect run', songs)
    }, [songs]);

    
    // add new song to list
    const addNewSong = (title) => {
        setSongs([...songs, {title, id:id()}])
    }

    return ( 
        <div className='song-list'>
            <ul>
                {songs.map((song) => {
                    return(
                        <li key={song.id}>{ song.title }</li>
                    )
                })}
            </ul>
            <NewSongForm addNewSong={addNewSong}/>
            <button style={{marginTop:'20px'}} onClick={() => setSongsCount(songsCount + 1)}>Increase Songs {songsCount} By 1</button>
        </div>
    );
}
 
export default SongList;