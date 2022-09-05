import '../Css/style.css';

export function StudentCard(props){
     const {Name,Age, Course, Branch, EditStudent } = props;
    return(
        <div className="StudentCard">
           <h2 style={{fontSize:'1rem'}}> {Name}</h2>
           <h2 style={{fontSize:'1rem'}}> {Age}</h2>
           <h2 style={{fontSize:'1rem'}}>{Course}</h2>
           <h2 style={{fontSize:'1rem'}}>{Branch}</h2>
           <button onClick={ EditStudent} >Edit</button>
        </div>  
    )
}