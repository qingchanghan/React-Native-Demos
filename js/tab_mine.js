import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Navigator,
    Dimensions,
    TouchableOpacity
} from 'react-native';

class Tab_Mine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_center}>
                        <Text style={styles.header_title}>我的信息</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'flex-start',
        alignItems : 'center',
        bottom : 5
    },
    header: {
        flexDirection: 'row',   // 水平排布  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingTop: 20,  
        height:  68,    
        backgroundColor: '#0072C6',  
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中  
    },
    header_center: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header_title: {  
		fontSize: 18,
		color: "white"
    }
});
module.exports = Tab_Mine;