import { useMemo } from 'react'
import { StyleSheet } from 'react-native'

const useStyle=()=>{
    return useMemo(()=>{
        return StyleSheet.create({
            container: {
                borderWidth:1,
                backgroundColor:'white',
                margin:10,
                borderRadius:20,
                padding:5,
                justifyContent: 'center',
                alignItems: 'center',
            },
            imgCallout:{
                width:100,
                height:100,
                marginBottom:10,
            },
            titleCallout:{
                fontSize:20,
                fontWeight:'bold',
                textAlign:'center'
            },
        })
    },[])
}

export default useStyle;
