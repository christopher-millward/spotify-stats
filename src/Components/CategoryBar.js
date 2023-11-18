import '../Styles/_categoryBar.scss';
import track from '../images/track.png';
import artist from '../images/artist.png';
import genre from '../images/genre3.png';
import CategoryButton from './CategoryButton'

function CategoryBar(props) {

  //create props for each button
  const trackProps={
    'icon': track,
    'text': 'Top Tracks',
    'route':'tracks',
    'setRoute':props.setRoute
  };
  const artistProps={
    'icon': artist,
    'text': 'Top Artists',
    'route':'artists',
    'setRoute':props.setRoute
  };
  const genreProps={
    'icon': genre,
    'text': 'Top Genres',
    'route':'genres',
    'setRoute':props.setRoute
  };
  const categoryButtons=[trackProps, artistProps, genreProps];

    return (
        <div className='categoryBar'>
          {categoryButtons.map((x)=><CategoryButton attributes={x} route={props.route}/>)}
        </div>
    );
  }
  
  export default CategoryBar;
  