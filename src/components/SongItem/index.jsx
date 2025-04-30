import SongList from "../SongList";
import './index.css'

const SongItem = props => {
    const { song } = props;
    return(
        <>
        <div className="each-song">
            <img className="logo" src="https://imgs.search.brave.com/55jCGrA1WwckK5n_m-e9OeAQMcQ_8LsoVtrnKzMfwyk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/MjA4MzY1NC92ZWN0/b3IvaG9sb2dyYW0t/c3RpY2tlci1kZXNp/Z24td2l0aC1tdXNp/Yy1pY29uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DWHY0/VS1pQTVYNFRnbk9N/bkJjTDc3dWJwdXk2/VzVWZ0RYY2g2UGRO/SnE0PQ"/>
            <li className="list">
                {song.name}
            </li>
        </div>
        </>
    )

}
export default SongItem;