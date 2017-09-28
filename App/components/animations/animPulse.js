import React, { Component } from 'react';
import { AppRegistry, View, Animated, Easing, Image } from 'react-native';
import { StackNavigator, Navigator } from 'react-navigation';
import Connexion from '../connexion';
import TimerMixin from 'react-timer-mixin';
import image1 from '../../images/plume.png';

export default class AnimPulse extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 0,
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
        width: 250,
        height: 250,
    }

}
