//import libraries for making a component
import React, { Component } from 'react';
import { View, ScrollView} from 'react-native';
import Button from './Button';
import MovieDetail from './MovieDetail';

class MovieList extends Component {
  state = {albums: []};
  componentWillMount(){
    fetch (
      'https://api.themoviedb.org/3/movie/now_playing?api_key=cfe422613b250f702980a3bbf9e90716')
      .then(response => response.json())
      .then(response => this.setState({albums: response.results}));
  }
  
  renderAlbums() {
   return this.state.albums.map(album =>{
   album.favorite = false;
   return <MovieDetail record={album} key={album.title}/>
   });
  } 
  render() {
    return (
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default MovieList;
