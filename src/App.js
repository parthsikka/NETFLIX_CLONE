import React, { Component } from 'react';
import Movies from './Components/Movies/movies.jsx';
import Header from './Components/Header/header.jsx';
import axios from "axios" ;
import {API_KEY,API_URL,IMAGE_URL} from "./API/secret.js" ; 
import Pagination from './Components/Pagination/pagination.jsx';


class App extends Component {
  state = { 
    moviesData :[], 
    currentMovie : "Avengers",
    pages : [],
    currPage : 1 ,
  } ;

async componentDidMount(){
  let data = await axios.get(API_URL + "/search/movie" , {params : {api_key : API_KEY, page : 1, query : this.state.currentMovie}}) ;
  let moviesData = data.data.results ;
  let pagesCount = data.data.total_pages ;
  let pages = [] ;
  for(let a=1 ; a<=pagesCount ; a++){
    pages.push(a) ;
  }
  this.setState({
    moviesData : moviesData ,
    pages:pages

  })
}
setMovies = async (newMovieName) =>{
  let data = await axios.get(API_URL + "/search/movie" , {params : {api_key : API_KEY, page : 1, query : newMovieName}}) ;
  
  let moviesData = data.data.results ;
  let pagesCount = data.data.total_pages ;
  let pages = [] ;
  for(let a=1 ; a<=pagesCount ; a++){
    pages.push(a) ;
  }
  this.setState({
    moviesData : moviesData ,
    currentMovie: newMovieName,
    pages:pages
  })
}

nextPage = async ()=> {
  let data = await axios.get(API_URL + "/search/movie" , {params : {api_key : API_KEY, page : this.state.currPage + 1, query : this.state.currentMovie}}) ;
  let moviesData = data.data.results ; 
  this.setState({
    moviesData : moviesData,
    currPage : this.state.currPage+1
  })
}

previousPage = async ()=> {
  let data = await axios.get(API_URL + "/search/movie" , {params : {api_key : API_KEY, page : this.state.currPage - 1, query : this.state.currentMovie}}) ;
  let moviesData = data.data.results ; 
  this.setState({
    moviesData : moviesData,
    currPage : this.state.currPage-1
  })
}

setPage = async (pageCount) =>{
  let data = await axios.get(API_URL + "/search/movie" , {params : {api_key : API_KEY, page : pageCount, query : this.state.currentMovie}}) ;
  let moviesData = data.data.results ; 
  this.setState({
    moviesData : moviesData, 
    currPage : pageCount
  })
}

  render() { 
    return ( <div className="app">
      <Header setMovies={this.setMovies}></Header>
      {this.state.moviesData.length ? ( 
        <React.Fragment>
    <Movies movies={this.state.moviesData}></Movies>
    <Pagination pages={this.state.pages} nextPage={this.nextPage} previousPage={this.previousPage} setPage={this.setPage}></Pagination></React.Fragment>)
    : (<h1> Sorry No movies found!</h1>)
      }
    </div>
       );
  }
}
 
export default App;
