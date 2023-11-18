import '../Styles/_song.scss'
function Song(props) {

    const artists=props.data.artists.map((x)=>x.name).join(', ')

    return (
      <div className="song">
        <p className='index'>
            {props.index+1}
        </p>
        <img src={props.data.album.images[0].url} className='songImage' alt='songImg'/>

        <p className='songInfo'>
            <p className='songTitle'><b>{props.data.name}</b></p>
            <p className='songArtistName'>{artists}</p>
            <p className='albumName'><i>{props.data.album.name}</i></p>
        </p>
       
        
      </div>

    );
  }
  
  export default Song;
  