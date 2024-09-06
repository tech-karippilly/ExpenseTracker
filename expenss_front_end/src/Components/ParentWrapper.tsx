import React from 'react';
import { SafeAreaView, StatusBar, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../Styles/colors';

export interface ParentWrapperProps{
    children:React.ReactNode,
    parentStyle?:StyleProp<ViewStyle>
}

const ParentWrapper:React.FC<ParentWrapperProps> =({children,parentStyle})=>{

    return(
        <SafeAreaView style={[style.container,parentStyle]}>
            <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
            {children}
        </SafeAreaView>
    )

}

export default ParentWrapper;

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.primary
    }
})