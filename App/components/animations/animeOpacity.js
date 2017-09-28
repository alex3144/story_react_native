
import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class OpacityAnim extends React.Component {
   state = {
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
   }
   componentWillMount() {

   }

   componentDidMount() {
      setTimeout(
         () => {
            Animated.timing(                // Animate over time
               this.state.fadeAnim,         // The animated value to drive
               {
                  toValue: 1,               // Animate to opacity: 1 (opaque)
                  duration: 1000,          // Make it take a while
               }
            ).start();
         },
         3000  );                             // Starts the animation
  }

   render() {
      let { fadeAnim } = this.state;

      return (
         <Animated.View                 // Special animatable View
            style={{
               ...this.props.style,
               opacity: fadeAnim,         // Bind opacity to animated value
            }}
         >
            {this.props.children}
         </Animated.View>
      );
   }
}