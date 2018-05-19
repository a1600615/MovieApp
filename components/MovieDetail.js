//import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import * as actions from '../actions/movie_actions';
import { connect } from 'react-redux';

const MovieDetail = props => {
  console.log(props);
  
  return (
    <Card>
      <CardSection style={styles.thumbnailContainerStyle}>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.imageStyle}
            source={{ uri: 'https://image.tmdb.org/t/p/original'+ props.record.backdrop_path }}
          />
        </View>
        <View styles={styles.headerContentStyle}>
          <Text style={styles.titleStyle}>{props.record.original_title} </Text>
          <Text>{props.record.popularity} </Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={styles.fullImageStyle}
          source={{ uri: 'https://image.tmdb.org/t/p/w500' + props.record.poster_path }}
        />
      </CardSection>
      <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#1abc9c' title="favorite" onPress={()=> props.likeMovie(props.record)}>
            <Ionicons name="md-heart-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    </Card>
  );
};

export default connect(null, actions)(MovieDetail);

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
