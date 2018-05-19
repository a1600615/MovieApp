import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import * as actions from '../actions/movie_actions';
import { connect } from 'react-redux';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import { View, ScrollView, Image, Text} from 'react-native';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorite Movies',
  };

  renderLikedMovies() {
    return this.props.likedMovies.map(movie => {
   
      return (
    
      <Card key={movie.id}>
        <CardSection style={styles.thumbnailContainerStyle}>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.imageStyle}
              source={{ uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path  }}
            />
          </View>
          <View styles={styles.headerContentStyle}>
            <Text style={styles.titleStyle}>{movie.original_title} </Text>
            <Text>{movie.popularity} </Text>
          </View>
        </CardSection>
      </Card>
      );
    });
  }
  
  
  render() {  
    return  (
      <ScrollView>
      {this.renderLikedMovies()}
      </ScrollView>
    );
} 
}



function mapStateToProps(state) {
  console.log(state.likedMovies);
  
  return { likedMovies: state.likedMovies };
}

export default connect(mapStateToProps)(SettingsScreen);

const styles = {
  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginRight: 90,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  fullImageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  titleStyle: {
    fontSize: 18,
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
};
