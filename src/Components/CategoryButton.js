import '../Styles/_categoryButton.scss';

function CategoryButton(props) {
    
        /*Props:{
            icon: png,
            text: text,
            route: text,
            setRoute: setState()
        }*/
    if(props.route===props.attributes.route){
      //if you're on this page
      //add styling to show styled (selected button)
      return (
        <button className="categoryButton" id='selectedCategoryButton' onClick={()=>props.attributes.setRoute(props.attributes.route)}>
          <img src={props.attributes.icon} className='categoryIcon' alt='icon'/>
          {props.attributes.text}
        </button>
      );
    }else{
      return (
        <button className="categoryButton" onClick={()=>props.attributes.setRoute(props.attributes.route)}>
          <img src={props.attributes.icon} className='categoryIcon' alt='icon'/>
          {props.attributes.text}
        </button>
      );
    }
  }
  
  export default CategoryButton;
  