//import libraries for making a component
import React, { Component } from 'react';
import { View, ScrollView} from 'react-native';
import Button from './Button';
import MovieDetail from './MovieDetail';
import * as actions from '../actions/movie_actions';
import { connect } from 'react-redux';

class Movies extends Component {
    componentWillMount() {
        this.props.fetchMovies() 
      }

    rendermovies() {
        return this.props.movies ? this.props.movies.map(movie => <MovieDetail record={movie} key={movie.title}/>):
        <View></View>
       } 

    render() {  
          return  (
            <ScrollView>
            {this.rendermovies()}
            </ScrollView>
          );
      } 

}

function mapStateToProps({ movies }) {
  
    return { movies: movies.results };    
  }
export default connect(mapStateToProps, actions)(Movies);
