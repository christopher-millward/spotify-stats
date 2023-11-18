import '../Styles/_artist.scss'
function Artist(props) {
    
    return (
      <div className="artist">

        <img src={props.data.images[0].url} className='artistImage' alt='artistImg'/>

        <p className='artistArtistName'>
            <b>{props.index+1}</b>. {props.data.name}
        </p>
        
      </div>

    );
  }
  
  export default Artist;
  