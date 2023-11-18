import '../Styles/_banner.scss';
import logo from '../images/statsLogo.png'

function Banner(props) {
    return (
      <div className="banner">
        <img src={logo} alt='logo' className='statsLogo'/>
        <>SpotifyStats</>
      </div>
    );
  }
  
  export default Banner;
  