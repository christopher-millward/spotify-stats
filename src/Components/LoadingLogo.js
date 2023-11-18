import '../Styles/_logo.scss';

function LoadingLogo(props) {

    return (
        <div id="loadingLogoContainer">
            <div className='axes'>
                <div className='dataBar' id='bar1'/>
                <div className='dataBar' id='bar2'/>
                <div className='dataBar' id='bar3'/>
            </div>
        </div>
    );
  }
  
  export default LoadingLogo;
  