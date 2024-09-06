import React from 'react';
import { SafeAreaView, StatusBar, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../Styles/colors';

export interface ParentWrapperProps{
    children:React.ReactNode,
    parentStyle?:StyleProp<ViewStyle>,
    isStatusBar?:boolean
}

const ParentWrapper:React.FC<ParentWrapperProps> =({children,parentStyle,isStatusBar})=>{

    return(
        <SafeAreaView style={[style.container,parentStyle]}>
            <StatusBar 
            hidden={isStatusBar}
            backgroundColor={Colors.primary} barStyle={'dark-content'} />
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