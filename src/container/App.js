import React, { Component } from 'react';
import './App.css';
import SearchField from '../components/SearchField';
import MovieTitle from '../components/MovieTitle';
import MovieList from '../components/MovieList';
import Scroll from '../components/Scroll';
import Filter from '../components/Filter';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies:[],
      SearchField:'',
      filter:'off'
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

  render() {

    const filtering = this.state.movies;

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
         <MovieList movies={filtering}/>  
        </Scroll>
      </div>
    );
  }
}

export default App;
