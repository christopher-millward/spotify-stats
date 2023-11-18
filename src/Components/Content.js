import '../Styles/_content.scss';
import data from '../data/sampleData.json';
import Artist from './Artist';
import Song from './Song';

function Content(props) {

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

    
    

    return (
      <div className='content' id={`${props.route}Content`}>
        <div className='bumper'></div>
        {element}
      </div>
    );
  }
  
  export default Content;
  