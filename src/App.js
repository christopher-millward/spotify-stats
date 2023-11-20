import "./Styles/App.scss";
import {useState, useEffect} from 'react';
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import LoadingImage from "./Components/LoadingImage";
import Content from "./Components/Content";


function App(){
  const [route, setRoute]=useState('artists')
  const [timeline, setTimeline]=useState('short_term')
  const [appLoaded, setAppLoaded]=useState(true)

  useEffect(()=>{
    setInterval(()=>{
      //trigger logo to shrink into banner
      setAppLoaded(true)
    }, 7000)
  },[])


  return (
      <div className="App">

        {appLoaded?
          <>
            <Banner route={route} timeline={timeline}/>
            <Content route={route} timeline={timeline}/>
            <NavBar timeline={timeline} setTimeline={setTimeline} setRoute={setRoute} route={route}/>
          
          </>
        :<LoadingImage/>
        }
        
      </div>
  );
}

export default App;
