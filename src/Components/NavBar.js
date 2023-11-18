import CategoryBar from "./CategoryBar";
import TimelineBar from "./TimelineBar";
import '../Styles/_navBar.scss'

function NavBar(props) {

    return (
        <div className='navBar'>
          <div className="navBarTopBumper"></div>
          <TimelineBar timeline={props.timeline} setTimeline={props.setTimeline}/>
          <CategoryBar setRoute={props.setRoute} route={props.route}/>
          <div className="navBarBottomBumper"></div>
        </div>
    );
  }
  
  export default NavBar;
  