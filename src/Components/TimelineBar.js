import '../Styles/_timelineBar.scss'
import TimelineOption from './TimelineOption';

function TimelineBar(props){

    const timeline_short={
        'text': '4 Weeks',
        'timeline':'short_term',
        'setTimeline':props.setTimeline
    };
    
      const timeline_medium={
        'text': '6 Months',
        'timeline':'medium_term',
        'setTimeline':props.setTimeline
    };
    
      const timeline_long={
        'text': 'All-time',
        'timeline':'long_term',
        'setTimeline':props.setTimeline
    };
    const timelineOptions=[timeline_short,timeline_medium, timeline_long]

    return(
        <div className="timelineBar">
            {timelineOptions.map((x)=><TimelineOption attributes={x} timeline={props.timeline}/>)}
        </div>
    );
};

export default TimelineBar;