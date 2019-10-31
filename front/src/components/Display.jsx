import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => (
  <div className="display">
      <div id="displayCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
        {props.display && props.display.map((object, index) => {
          if(index === 0){
            return  <div key={index} className="carousel-item active">
                    <Link to={`/display/${object.imdbID}`}>
                    <img className="d-block w-100 rounded" src= {object.Poster} alt={index + "slide"}></img>
                    </Link>
                    <div className="carousel-caption d-md-block">
                              {props.authenticated 
                              &&
                              (!(props.listOfFaves.includes(object.imdbID))
                              && 
                              <button onClick={()=> props.addFave(object.Poster, object.imdbID)} className="styless"><i  style={{fontSize:30 + 'px'}} className="fa fa-heart"></i></button>
                              ||
                              <button onClick={()=> props.deleteFave(object.imdbID)} className="eliminate"><i  style={{fontSize:30 + 'px'}} className="fa fa-heart"></i></button>)}
                              </div>
                    
                  </div>
                  
          }
          return <div key={index} className="carousel-item">
                    <Link to={`/display/${object.imdbID}`}>
                      <img className="d-block w-100 rounded" src= {object.Poster} alt={index + "slide"}></img>
                    </Link>
                    <div className="carousel-caption d-md-block">
                   
                              {props.authenticated 
                              &&
                              (!(props.listOfFaves.includes(object.imdbID))
                              && 
                              <button onClick={()=> props.addFave(object.Poster, object.imdbID)} className="styless"><i  style={{fontSize:30 + 'px'}} className="fa fa-heart"></i></button>
                              ||
                              <button onClick={()=> props.deleteFave(object.imdbID)} className="eliminate"><i  style={{fontSize:30 + 'px'}} className="fa fa-heart"></i></button>)}
                    </div>
                  </div>
      })}
       <a className="carousel-control-prev" href="#displayCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#displayCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
     </div>
   </div>
 </div>
);