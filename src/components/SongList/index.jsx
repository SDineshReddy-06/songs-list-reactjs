import {v4 as uuidv4} from 'uuid'
import SongItem from '../SongItem'
import './index.css'

const songslist = [
    { id: uuidv4(), name: "Bohemian Rhapsody" },
    { id: uuidv4(), name: "Stairway to Heaven" },
    { id: uuidv4(), name: "Hotel California" },
    { id: uuidv4(), name: "Imagine" },
    { id: uuidv4(), name: "Sweet Child O' Mine" },
    { id: uuidv4(), name: "Smells Like Teen Spirit" },
];

const SongList = () => {
    return (
        <div className="container">
            <img className='main-logo' src='https://imgs.search.brave.com/3HAmaALdqyZ8Em0q2Ub15a0nO_QFCLWIa34WzK8Jh5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/Mjc3NTgxMTEvZmls/ZS9vcmlnaW5hbC03/Nzk2ZWQyYjVkZmIw/ZWEyNWQzMmVkZTc5/M2U1MzEzOS5qcGc_/cmVzaXplPTQwMHgw'/>
            <h1 className='main-head'>My Music Collection</h1>
            <p className='para'>A curated list of my all time favorite songs</p>
            <div className='card'>
                <div className='header-container'>
                    <h2 className='header'>Song List</h2>    
                </div>
                <div>
                    <ul className='list-container'>
                        {songslist.map((song) => (
                            <SongItem key={song.id} song = {song}/>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default SongList;