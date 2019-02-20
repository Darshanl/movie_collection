import React, { Component } from 'react';
import './App.css';
import SearchField from '../components/SearchField';
import MovieTitle from '../components/MovieTitle';
import MovieList from '../components/MovieList';
import Scroll from '../components/Scroll';
import Filter from '../components/Filter';
import MoviePage from '../components/MoviePage';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies:[],
      SearchField:'',
      filter:'off',
      route: 'home',
      movieData:{}
    }
  }

  componentDidMount(){
    fetch(`http://www.omdbapi.com/?apikey=7b438fb1&i=tt3896198`)
      .then(res => res.json())
      .then(data => this.setState({movies:[...this.state.movies, data]}))
      .catch(err => console.log(err))

  }

  onInputChange = (e) => {
    this.setState({SearchField:e.target.value});
  }

  onButtonClick = () => {
    if(this.state.SearchField.length > 0){
      this.setState({movies:[]})
    }
    fetch(`http://www.omdbapi.com/?apikey=7b438fb1&s=${this.state.SearchField}`)
      .then(res => res.json())
      .then(data => data.Search.map(search => {
        return this.setState({movies:[...this.state.movies, search]})
      }))
      .catch(err => console.log('data not found'))
      this.setState({SearchField:''})
  }

  onFilterClick =(event) => {
    this.setState({filter:event})
  }

  onViewClick = (imdbID) => {
    this.state.movies.map(movie => {
      if(movie.imdbID === imdbID){
        this.setState({route:'Movie-Page'})
        fetch(`http://www.omdbapi.com/?apikey=7b438fb1&i=${movie.imdbID}`)
          .then(res => res.json())
          .then(data => this.setState({movieData:data}))
          .catch(err => console.log(err))
      }
    })
  }

  onBackClick = (route) => {
    this.setState({route:route})
  }

  render() {

    const filtering = this.state.movies;

    {
      if(this.state.route === 'home'){
        return (
          <div className="App">
            <MovieTitle />
            <SearchField 
            onInputChange={this.onInputChange} 
            onButtonClick={this.onButtonClick} 
            SearchField={this.state.SearchField}
            />
            <Filter filter={this.state.filter} onFilterClick={this.onFilterClick}/>
            <Scroll>
             <MovieList movies={filtering} onViewClick={this.onViewClick}/>  
            </Scroll>
          </div>
        );
      } else {
        return (
          <div className="App">
            <MoviePage movieData={this.state.movieData} onBackClick={this.onBackClick}/>
          </div>
        );
      }
    }
  }
}

export default App;
