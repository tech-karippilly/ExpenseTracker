import React, { useEffect, useRef } from 'react';
import ParentWrapper from '../../../Components/ParentWrapper';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../../Styles/globalStyles';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../Styles/colors';

const SplashScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const slideUp = new Animated.Value(300)
    const slideUp2 =new Animated.Value(300)
    const duration = 5000;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 10,
            duration: 10000,
            useNativeDriver: true,
        }).start();

    }, [fadeAnim]);
    useEffect(() => {

        Animated.timing(slideUp, {
            toValue: -1,
            duration: duration,
            useNativeDriver: true
        })
            .start()
            Animated.timing(slideUp2, {
                toValue: -1,
                delay:5000,
                duration: duration,
                useNativeDriver: true
            })
                .start()
    }, [])


    return (
        <ParentWrapper parentStyle={GlobalStyles.centerCondent} isStatusBar={false}>
            <LinearGradient colors={[Colors.blue, Colors.primary,]} style={splashStyles.container}>
                <Animated.View style={[splashStyles.wrapperStyle, { transform: [{ translateY: slideUp }] }]}>
                    <Animated.Text style={[GlobalStyles.headingText, splashStyles.headerText, { opacity: fadeAnim }]}>Expense App</Animated.Text>
                </Animated.View >
                <Animated.View style={[splashStyles.wrapperStyle,{ transform: [{ translateY: slideUp2, }],opacity:fadeAnim}]}>
                    <Text style={[GlobalStyles.normalText, splashStyles.subHeading]}>Tack Your Expensses and Create a Finacially Stable Life</Text>
                </Animated.View>
            </LinearGradient>
        </ParentWrapper>
    )
}

const splashStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapperStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 20
    },
    headerText: {
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    subHeading: {
        textAlign: 'center',
        fontSize: 20
    }

})

export default SplashScreen;

