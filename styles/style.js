
import { View, Text, StyleSheet } from 'react-native'

export const globalStyles=StyleSheet.create({
    totalConent:{
        flex:1
    },
    header:{
    },
    headerLeft:{
        width:25,
        height:25
    },
    headerRight:{
        width:30,
        height:30
    },
    textHeader:{
        fontSize:25,
        fontWeight:'normal'
    },
    card:{
        padding:10,
        marginVertical:5,
        marginHorizontal:10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
    },
    cardContent:{
        justifyContent:"center",
        alignItems:'center'
    },accountList:{
        flexDirection:'row',
        justifyContent:'space-around'
    },accountItem:{
        
    },sectionText:{
        fontSize:20,
        fontFamily:'300',
        marginVertical:20
    },textTotal:{
        fontSize:30,
        color:'red',
        fontWeight:'100',
    },
    textOpacity:{
        opacity:0.5
    },
    textCard:{
        color:'black',
        lineHeight:25
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    textNameRecord:{
        fontSize:20,
        fontWeight:'normal'
    },recordCard:{
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderRadius:5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        padding:15,
        marginHorizontal:10,
        marginVertical:10,
        justifyContent:"space-between",
        alignItems:'center'
    },recordImage:{
        width:55,
        height:55,
    },recordContent1:{
        position:'relative',
        left:-50
    },recordContent2:{
        
    },imageModal:{
        width:50,
        height:100
    }

})