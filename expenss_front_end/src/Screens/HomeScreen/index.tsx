import React from 'react';
import { Text, View } from 'react-native';
import ParentWrapper from '../../Components/ParentWrapper';
import { GlobalStyles } from '../../Styles/globalStyles';

const HomeScreen:React.FC = ()=>{
    return (
        <ParentWrapper parentStyle={GlobalStyles.centerCondent}>
        <View>
            <Text>Home Screen</Text>
        </View>
        </ParentWrapper>
    )
}

export default HomeScreen;