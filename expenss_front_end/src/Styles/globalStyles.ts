import { StyleSheet } from "react-native";
import { Colors } from "./colors";


export const GlobalStyles = StyleSheet.create({

    centerCondent:{
        justifyContent:'center',
        alignItems:'center'
    },
    headingText:{
        fontSize:24,
        fontFamily:'Poppins-ExtraBold',
        color:Colors.black
    },
    normalText:{
        fontSize:15,
        fontWeight:'500',
        fontFamily:'Poppins-Medium'
    }

})