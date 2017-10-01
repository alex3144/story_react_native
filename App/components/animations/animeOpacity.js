import React from 'react';
import { Animated, View } from 'react-native';

//Animation
export default class OpacityAnim extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }
  componentWillMount() {
  }

  componentDidMount() {
    setTimeout(
      () => {
        Animated.timing(
          this.state.fadeAnim,
          {
            toValue: 1,
            duration: 1000,
          }
        ).start();
      },
    ); 
  }
  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}