import React, { Component } from 'react';
import { View, Animated, Easing, Image } from 'react-native';
import image1 from '../../images/plume.png';

export default class AnimPulse extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 2000,
            easing: Easing.bounce

        }).start();
    }
    render() {
        const animatedStyle = { opacity: this.animatedValue }
        return (
            <Animated.View style={[animatedStyle]}>
                <Image source={image1} style={styles.imageStyle} />
            </Animated.View>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    imageStyle: {
        marginTop:60,
        width: 200,
        height: 200,
    }

}
