import LoadingLogo from "./LoadingLogo";
import spotifyLogo from '../images/spotify.png';
import '../Styles/_loadingImage.scss'
function LoadingImage() {

    return (
        <div id="loadingImage">
            <LoadingLogo/>
            <img src={spotifyLogo} id="spotifyLogo" alt="loading"/>
            <p className="loadingText">Loading...</p>
        </div>
    );
  }
  
  export default LoadingImage;
  