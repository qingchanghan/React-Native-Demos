"use strict";
/*var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity
} = React; //使用简写*/
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Navigator
} from 'react-native';

class FirstPage extends Component {
    onPress() {
        alert("我是韩青长！");
    }
    gotoSecond(name, type = 'Normal') {
        this.props.navigator.push({
            component: SecondPage,
            passProps: {
                id: name
            },
            onPress: this.onPress,
            rightText: "ALERT!",
            type: type
        })
    }
    gotoThird(name, type = 'Normal') {
        this.props.navigator.push({
            component: ThirdPage,
            passProps: {
                id: name
            },
            onPress: this.onPress,
            rightText: "ALERT!",
            type: type
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headText}>
                        {'第一页'}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.gotoSecond('第一页')}>
                    <Text style={styles.buttonText}>
                        {'跳转至第二页(右出)'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.gotoSecond('第一页', 'Bottom')}>
                    <Text style={styles.buttonText}>
                        {'跳转至第二页(下出)'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.gotoThird('第一页')}>
                    <Text style={styles.buttonText}>
                        {'跳转至第三页(右出)'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class SecondPage extends Component {
    onPress() {
        alert("我是韩青长！");
    }
    gotoFirst(){
        this.props.navigator.pop();
    }
    gotoThird(name, type = 'Normal'){
        this.props.navigator.push ({
            component: ThirdPage,
            passprops: {
                id: name
            },
            //下面这几行不知道是干嘛的
            onPress: this.onPress,
            rightText: "ALERT!",
            type: type
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headText}>
                        {'第二页'}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.gotoFirst()}>
                    <Text style={styles.buttonText}>
                        跳转至第一页
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.gotoThird('第二页')}>
                    <Text style={styles.buttonText}>
                        跳转至第三页(右出)
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.gotoThird('第二页', 'Bottom')}>
                    <Text style={styles.buttonText}>
                        跳转至第三页(下出)
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
class ThirdPage extends Component {
    onPress() {
        alert("我是韩青长！");
    }
    gotoFirst(){
        this.props.navigator.pop();
        this.props.navigator.pop();
    }
    gotoSecond(){
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headText}>
                        {'第三页'}
                    </Text>
                </View>
                 <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.gotoFirst()}>
                    <Text style={styles.buttonText}>
                        跳转至第一页
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.gotoSecond()}>
                    <Text style={styles.buttonText}>
                        跳转至第二页
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class navigatorTest extends Component {
    renderScene(route, navigator) {
        return <route.component navigator={navigator} {...route.passprops} />;
    }

    configureScene(route, routeStack) {
        if(route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom; //底部弹出
        }
        return Navigator.SceneConfigs.PushFromRight; //右侧弹出
    }

    render() {
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{component: FirstPage}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }
}

var styles = StyleSheet.create({
   //页面框架
   container: {
       flex: 1
   },
   //导航栏
   heading: {
       height: 50,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#00bfff',
       marginBottom: 20
   },
   //导航栏文字
   headText: {
       justifyContent: 'center',
       color: '#ffffff',
       fontSize: 22
   },
   //按钮
   button: {
       height: 60,
       marginTop: 20,
       justifyContent: 'center',
       backgroundColor: '#f0f8ff',
       alignItems: 'center'
   },
   // 按钮文字
  buttonText: {
    fontSize: 18
  }
});

module.exports = navigatorTest; //导出模块