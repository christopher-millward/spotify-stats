import '../Styles/_content.scss';
import data from '../data/sampleData.json';
import Artist from './Artist';
import Song from './Song';
import React, {useEffect, useRef} from 'react';

function Content(props) {

    const updateRef=useRef();
    
    let element;
    if(props.route==='genres'){
        
        element=<div>Genre data is not available at this time</div>

    }else{
        const currentData=data[props.route][props.timeline].items

        
        switch(props.route){
            case 'tracks':
                element=currentData.map((x,i)=><Song data={x} index={i}/>)
            break;

            case 'artists':
                element=currentData.map((x,i)=><Artist data={x} index={i}/>)
            break;

            default:
            break;
        }
    }

    useEffect(()=>{
        //flash content opacity for smooth transition
        updateRef.current.animate({
            opacity:[0,1]
        },1500)
    },[element])

    return (
      <div className='content' id={`${props.route}Content`} ref={updateRef}>
        <div className='bumper'></div>
        {element}
      </div>
    );
  }
  
  export default Content;
  