//import libraries for making a component
import React from 'react';
import { Text, TouchableOpacity  } from 'react-native';


const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.whenPress} style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>
        Like me
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = {
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#056ecf',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#056ecf',
    marginLeft:5,
    marginRight:5
  },
};

