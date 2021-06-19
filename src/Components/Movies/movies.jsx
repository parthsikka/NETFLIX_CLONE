import React, { Component } from 'react';
import Movie from "../Movie/movie.jsx"
import "./movies.css" ;

class Movies extends Component {
    state = {  }
    render() { 
        
        return ( <div className="movies">
            {this.props.movies.map((movieObject)=>{
                    return(<Movie key={movieObject.id} movie={movieObject}></Movie>)
            })}
        </div> );
    }
}
 
export default Movies;