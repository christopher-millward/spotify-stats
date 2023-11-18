import '../Styles/_timelineOption.scss'

function TimelineOption(props){
    if(props.timeline===props.attributes.timeline){
        //if already in this timeline
        //add styling to show styled (selected button)

        return(
            <button className="timelineOption" id='selectedTimelineOption' onClick={()=>props.attributes.setTimeline(props.attributes.timeline)}>
                {props.attributes.text}
            </button>
        );

        }else{
            return(
                <button className="timelineOption" onClick={()=>props.attributes.setTimeline(props.attributes.timeline)}>
                    {props.attributes.text}
                </button>
            );

        }
};

export default TimelineOption;