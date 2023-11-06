import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export class CharScreen extends Component {
    render() {
        return (
            <View>
                <View style={style.text1}>
                <Text >Create or select a character to join a table:</Text>
                </View>
                <View style={style.char}>

                    <TouchableOpacity style={style.buttomAdd}>
                        <Text>Create Char</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.buttomDel}>
                        <Text>Delete Char</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.charList}>
                    <Text>Char List</Text>

                    <TouchableOpacity style={style.charList2}>
                    <Text>Tormenta</Text>
                    <Text>Classe: Bruxo</Text>
                    <Text>Level:6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.charList2}>
                    <Text>Krusk</Text>
                    <Text>Classe: Paladino</Text>
                    <Text>Level:6</Text>
                    </TouchableOpacity>
                    
                    
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    text1:{
        padding:10,
        marginRight:25,
        marginLeft:25,
        marginTop:40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#efefef'
    },
    char: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttomAdd: {
        backgroundColor: 'blue',
        margin: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10

    },
    buttomDel: {
        backgroundColor: 'red',
        margin: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10
    },
    charList:{
        justifyContent:'center',
        alignItems:'center',
    
        
    },
    charList2:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#Efefef',
        margin:10,
        padding:40,
        borderRadius:10
    }

})


export default CharScreen